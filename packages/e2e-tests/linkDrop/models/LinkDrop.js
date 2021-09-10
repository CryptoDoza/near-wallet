class LinkDropPage {
    constructor(page) {
        this.page = page;
    }
    async navigate(contractAccountId, secretKey) {
        await this.page.goto(`/linkdrop/${contractAccountId}/${secretKey}`);
    }
    async claimToExistingAccount() {
        await this.page.click(`data-test-id=linkdropClaimToExistingAccount`);
    }
    async createAccountToClaim() {
        await this.page.click(`data-test-id=linkdropCreateAccountToClaim`);
    }
}

module.exports = { LinkDropPage };