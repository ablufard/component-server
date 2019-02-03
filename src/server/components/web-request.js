"use strict";

export default class WebRequest {
  constructor(url, params) {
    this.url = url;
    this.params = params;
  }

  makeRequest() {
    console.log(this.url);
  }

}

