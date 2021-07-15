import ApiClient from "../api_client";
import BaseLedger from "./base_ledger";

class ProductLedger extends BaseLedger {
  constructor() {
    super();
    this.url_link = "0.0.0.0:3000/products";
  }

  get productsList() {
    if (this._product_list) return this._product_list;

    this.getProducts();
    return this._product_list;
  }

  get productsIndex() {
    if (this._products_index) return this._products_index;

    this._products_index = this.index_for_list(this.productsList)
    return this._products_index
  }

  // set productsIndex(no){
  //   this._products_index = no;
  // }

  getProducts(page_number = 0, page_size = 25) {
    let client = new ApiClient();
    this._product_list = client.product_list(page_size, page_number);
    this._products_index = null;
  }
}

export default ProductLedger
