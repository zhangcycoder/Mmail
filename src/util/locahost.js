const localData = function (method, name, obj) {
    switch (method) {
      case 'get':
        if (localStorage.getItem(name + '_obj')) {
          return JSON.parse(localStorage.getItem(name + '_obj'));
        } else if (localStorage.getItem(name + '_str')) {
          return localStorage.getItem(name + '_str');
        } else {
          return []
        }
      case 'set':
        localData('clean', name);
        if (typeof obj == 'object') {
          localStorage.setItem(name + '_obj', JSON.stringify(obj));
        } else {
          localStorage.setItem(name + '_str', obj);
        }
        return true;
      case 'clean':
        localStorage.removeItem(name + '_obj');
        localStorage.removeItem(name + '_str');
        return true;
    }
  };
export default localData