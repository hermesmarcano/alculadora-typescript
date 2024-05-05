export function formatCurrency(quantity : number) {
return new Intl.NumberFormat('en-US', {
    style: "currency", currency: 'EUR'
}).format(quantity)
}