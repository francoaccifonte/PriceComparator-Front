class BaseLedger {
  index_for_list(list) {
    let hashed_response = {}
    console.log(list)
    for (const item of list) {
      hashed_response[item['id']] = item;
    }
    return(hashed_response)
  }
}

export default BaseLedger
