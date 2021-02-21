import PropTypes from 'prop-types';
export function normalizeQuantity( quantity, pieceUnit ){
    return pieceUnit?parseInt(quantity):parseFloat(quantity);
};
export function normalizeStringQuantity( quantity, pieceUnit ){
    return pieceUnit?parseInt(quantity).toFixed(0):parseFloat(quantity).toFixed(3);
};
export function normalizeSum( sum ){
    return (Math.floor(sum*100)/100).toLocaleString('iw-en', { style: 'currency', currency: 'ILS' });
};
