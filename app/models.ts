export class Expense {
    base: number;
    vatPercent: number;
    private tip15percent: number;
    private tip18percent: number;
    private tip20percent: number;

    constructor(base: number) {
        this.base = base;
        this.vatPercent = 8.875;
        this.tip15percent = 15;
        this.tip18percent = 18;
        this.tip20percent = 20;
    }

    vat() { return parseFloat(this.base.toString()) * parseFloat(this.vatPercent.toString()) / 100; }

    subtotal() { return parseFloat(this.base.toString()) + this.vat(); }

    tip15() { return this.subtotal() * this.tip15percent / 100; }
    tip18() { return this.subtotal() * this.tip18percent / 100; }
    tip20() { return this.subtotal() * this.tip20percent / 100; }

    total15() { return this.subtotal() + this.tip15(); }
    total18() { return this.subtotal() + this.tip18(); }
    total20() { return this.subtotal() + this.tip20(); }
}
