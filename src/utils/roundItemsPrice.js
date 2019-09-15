const roundItemsPrice = fullPrice => {
  const roundPrice = Math.round(fullPrice * 100 )
  return (roundPrice / 100)
}

export default roundItemsPrice;