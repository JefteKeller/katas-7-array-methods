Array.prototype.newForEach = function (callback, thisArg) {
	const max = this.length;

	for (let index = 0; index < max; index++) {
		if (this[index] === undefined) continue;

		callback.call(thisArg, this[index], index, this);
	}
	return undefined;
};

Array.prototype.newMap = function (callback, thisArg) {
	const newArray = [];
	const max = this.length;

	for (let index = 0; index < max; index++) {
		if (this[index] === undefined) continue;

		newArray[index] = callback.call(thisArg, this[index], index, this);
	}
	return newArray;
};

Array.prototype.newSome = function (callback, thisArg) {
	const max = this.length;

	for (let index = 0; index < max; index++) {
		if (this[index] === undefined) continue;

		if (callback.call(thisArg, this[index], index, this) === true) {
			return true;
		}
	}
	return false;
};

Array.prototype.newEvery = function (callback, thisArg) {
	const max = this.length;

	for (let index = 0; index < max; index++) {
		if (this[index] === undefined) continue;

		if (callback.call(thisArg, this[index], index, this) == false) {
			return false;
		}
	}
	return true;
};

Array.prototype.newFind = function (callback, thisArg) {
	const max = this.length;

	for (let index = 0; index < max; index++) {
		if (callback.call(thisArg, this[index], index, this) === true) {
			return this[index];
		}
	}
	return undefined;
};

Array.prototype.newFindIndex = function (callback, thisArg) {
	const max = this.length;

	for (let index = 0; index < max; index++) {
		if (this[index] === undefined) continue;

		if (callback.call(thisArg, this[index], index, this) === true) {
			return index;
		}
	}
	return -1;
};

Array.prototype.newFilter = function (callback, thisArg) {
	const max = this.length;
	const newArray = [];

	for (let index = 0; index < max; index++) {
		if (this[index] === undefined) continue;

		if (callback.call(thisArg, this[index], index, this) === true) {
			newArray.push(this[index]);
		}
	}
	return newArray;
};
