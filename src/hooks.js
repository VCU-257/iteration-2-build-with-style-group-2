import { useEffect } from "react";

export function usePageTitle(newTitle) {
    useEffect(() => {
        document.title = newTitle;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export function useResetScrolling() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
}

export function useFicoScoreDetails() {
    const savedAccountInfo = JSON.parse(localStorage.getItem("accountInfo"));
    const savedAdditionalInfo = JSON.parse(localStorage.getItem("additionalInfo"));
    if(savedAccountInfo === null || savedAdditionalInfo === null) {
        return {
            score: "Please enter account info to see your score.",
            paymentHistoryImpact: 0,
            utilizationImpact: 0,
            historyImpact: 0,
            mixImpact: 0,
            inquiryImpact: 0,
            mostNegativeImpact: "paymentHistoryImpact",
            mostPositiveImpact: "paymentHistoryImpact"
        }
    }
    const LOWEST_POSSIBLE_SCORE = 300;
    const HIGHEST_POSSIBLE_SCORE = 850;
    let score = LOWEST_POSSIBLE_SCORE; // Base score
    let data = compileAccountInfo(savedAccountInfo, savedAdditionalInfo);

    // 1. Payment History (35%) - Impact: 0 to 200 points
    let paymentHistoryImpact = data.missedPayments > 0 ? 100 - (data.missedPayments * 20) : 150;
    score += Math.max(0, paymentHistoryImpact);

    // 2. Amounts Owed/Utilization (30%) - Impact: 0 to 150 points
    let utilization = data.totalBalance / data.totalLimit;
    let utilizationImpact = 150 - (utilization * 100);
    score += Math.max(0, Math.min(150, utilizationImpact));

    // 3. Length of Credit History (15%) - Impact: 0 to 100 points
    let historyImpact = data.averageAgeYears * 10;
    score += Math.min(100, historyImpact);

    // 4. Credit Mix (10%) - Impact: 0 to 50 points
    let mixImpact = data.hasMultipleAccountTypes ? 50 : 20;
    score += mixImpact;

    // 5. New Credit (10%) - Impact: 0 to 50 points
    let inquiryImpact = 50 - (data.recentInquiries * 10);
    score += Math.max(0, inquiryImpact);

    score = Math.min(HIGHEST_POSSIBLE_SCORE, Math.max(LOWEST_POSSIBLE_SCORE, Math.round(score)));

    const mostNegativeImpactValue = Math.min(paymentHistoryImpact, utilizationImpact, historyImpact, mixImpact, inquiryImpact);
    const mostPositiveImpactValue = Math.max(paymentHistoryImpact, utilizationImpact, historyImpact, mixImpact, inquiryImpact);

    const output = {
        score,
        paymentHistoryImpact,
        utilizationImpact,
        historyImpact,
        mixImpact,
        inquiryImpact,
        mostNegativeImpact: "",
        mostPositiveImpact: ""
    }

    for(let i = 0; i < Object.keys(output).length; i++) {
        const currentKey = Object.keys(output)[i];
        if(output[currentKey] === mostNegativeImpactValue) {
            output["mostNegativeImpact"] = currentKey;
        }
        if(output[currentKey] === mostPositiveImpactValue) {
            output["mostPositiveImpact"] = currentKey;
        }
    }

    console.log(output);

    return output;
}

function compileAccountInfo(allAccountInfo, additionalInfo) {
    const data = {
        missedPayments: 0,
        totalBalance: 0,
        totalLimit: 0,
        averageAgeYears: 0,
        hasMultipleAccountTypes: false,
        recentInquiries: additionalInfo.inquiries
    };
    let hasCredit, hasLoan;
    for(let i = 0; i < allAccountInfo.length; i++) {
        hasCredit = hasCredit ? hasCredit : allAccountInfo[i].loan === "false";
        hasLoan = hasLoan ? hasLoan : allAccountInfo[i].loan === "true";
        data.missedPayments += allAccountInfo[i].missedPayments;
        data.totalBalance += allAccountInfo[i].balance;
        data.totalLimit += allAccountInfo[i].limit;
        data.averageAgeYears += allAccountInfo[i].age / 12;
        data.hasMultipleAccountTypes = hasLoan && hasCredit;
    }
    data.averageAgeYears = data.averageAgeYears / allAccountInfo.length;
    return data;
}
