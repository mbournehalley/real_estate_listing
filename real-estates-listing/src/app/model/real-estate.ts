export class RealEstate {
  address: string;
  price: string;
  beds: string;
  baths: string;
  sqft: string;
  built: string;
  thumb: string;
  url: string;

  constructor(
    _address: string,
    _price: string,
    _beds: string,
    _baths: string,
    _sqft: string,
    _built: string,
    _thumb: string,
    _url: string,
  ) {
    this.address = _address;
    this.price =_price;
    this.beds = _beds;
    this.baths = _baths;
    this.sqft = _sqft;
    this.built = _built;
    this.thumb = _thumb;
    this.url = _url;
  }
}
