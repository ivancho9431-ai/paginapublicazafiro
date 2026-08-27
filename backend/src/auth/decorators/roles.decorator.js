const setMetadata = (key, value) => (target, propertyKey, descriptor) => {
  Reflect.defineMetadata(key, value, target, propertyKey || target);
  return descriptor;
};

const Roles = (...roles) => (target, propertyKey, descriptor) => {
  setMetadata('roles', roles)(target, propertyKey, descriptor);
  return descriptor;
};

module.exports = { Roles };
