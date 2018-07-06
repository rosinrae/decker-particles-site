const objectValueDefault = (object, default) => (x) => object.hasOwnProperty(x)? object[x]: default

const objectDefaultNullString = (obj) => objectValueDefault(obj, "")()
