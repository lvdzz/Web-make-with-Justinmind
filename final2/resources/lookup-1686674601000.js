(function(window, undefined) {
  var dictionary = {
    "9c12f103-60e0-4eb3-a8f0-facdf74a75e9": "Tra cứu đơn hàng",
    "cec9970c-b1bf-40ab-a27d-28ba9c8a2935": "Tìm cửa hàng",
    "e486d349-be56-45ce-b884-a700a477cb3b": "đăng nhập",
    "83047eba-7d51-4b68-813d-9206931945c0": "giỏ hàng",
    "da58b780-a7d9-47ee-afb7-158c0ede59ed": "đăng ký",
    "661508f0-9817-454a-b697-e09298a8cabf": "danh sách sản phẩm",
    "ff670592-f554-4411-af76-36c43f61a268": "blog",
    "8d45484c-72d7-478c-a14e-731d4ac9c871": "sản phẩm",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Main screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);