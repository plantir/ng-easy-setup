import template from './app.html';

let appComponent = {
  template,
  restrict: 'E',
  controller:($product)=>{
    "ngInject";
    $product.save({
      username:'admin',
      password:'123@Admin'
    })
  }
};

export default appComponent;
