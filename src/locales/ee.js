// load a locale
numeral.register('locale', 'ee', {
  delimiters: {
      thousands: ' ',
      decimal: ','
  },
  abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
  },
  ordinal : function (number) {
      return number === 1 ? 'er' : 'ème';
  },
  currency: {
      symbol: '€'
  }
});
