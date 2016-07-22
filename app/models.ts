export class Expense {
    base: number;
    vatPercent: number;
    subtotal: number;
    private tip15percent: number;
    private tip18percent: number;
    private tip20percent: number;

    constructor(base: number) {
        this.base = base;
        this.vatPercent = 8.875;
        this.calcSubtotal();
        this.tip15percent = 15;
        this.tip18percent = 18;
        this.tip20percent = 20;
    }

    calcBase() {
        this.base = parseFloat(this.subtotal.toString()) / (100 + parseFloat(this.vatPercent.toString())) * 100;
        console.log(this.base);
    }
    setBase(value: number) {
        this.base = value | 0;
        this.calcSubtotal();
    }

    getVat() { return parseFloat(this.base.toString()) * parseFloat(this.vatPercent.toString()) / 100; }

    calcSubtotal() {
        this.subtotal = parseFloat(this.base.toString()) + this.getVat();
    }
    getSubtotal() {
        return this.subtotal;
    }
    setSubtotal(value: number) {
        this.subtotal = value | 0;
        this.calcBase();
    }

    tip15() { return this.getSubtotal() * this.tip15percent / 100; }
    tip18() { return this.getSubtotal() * this.tip18percent / 100; }
    tip20() { return this.getSubtotal() * this.tip20percent / 100; }

    total15() { return this.getSubtotal() + this.tip15(); }
    total18() { return this.getSubtotal() + this.tip18(); }
    total20() { return this.getSubtotal() + this.tip20(); }
}
