import ApiClient from "./api_client";
import ProductLedger from "./ledgers/product_ledger";


class ResponseLedger {
  constructor() {
    this.products = new ProductLedger();
  }

  getProducts() {
    let api = new ApiClient()
    return api.product_list();
  }
}

export default ResponseLedger
