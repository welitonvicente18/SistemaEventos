export function formatDatePtBr(date: string | Date) {
    if (!date) return '';
    return new Date(date).toLocaleDateString('pt-BR');
}
