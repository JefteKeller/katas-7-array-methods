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
	const newArray = [];
	const max = this.length;

	for (let index = 0; index < max; index++) {
		if (this[index] === undefined) continue;

		if (callback.call(thisArg, this[index], index, this) === true) {
			newArray[newArray.length] = this[index];
		}
	}
	return newArray;
};

//             Bonus                   //

Array.prototype.newConcat = function (...args) {
	const newArray = this;

	for (let index = 0; index < args.length; index++) {
		if (args[index].length === undefined) {
			newArray[newArray.length] = args[index];
			continue;
		}

		for (let j = 0; j < args[index].length; j++) {
			if (args[index][j] === undefined) {
				newArray.length++;
				continue;
			}
			newArray[newArray.length] = args[index][j];
		}
	}
	return newArray;
};

Array.prototype.newIncludes = function (searchElement, fromIndex) {
	let index;
	if (fromIndex !== undefined) {
		index = fromIndex;
	} else {
		index = 0;
	}

	for (; index < this.length; index++) {
		if (this[index] === searchElement) {
			return true;
		}
		if (isNaN(this[index])) {
			if (isNaN(searchElement)) {
				return true;
			}
		}
	}
	return false;
};

Array.prototype.newIndexOf = function (searchElement, fromIndex) {
	let index;
	if (fromIndex !== undefined) {
		index = fromIndex;
	} else {
		index = 0;
	}

	if (fromIndex >= this.length) {
		return -1;
	}

	if (fromIndex < 0) {
		index = this.length;
		for (; index > 0; index--) {
			if (this[index] === undefined) continue;

			if (this[index] === searchElement) {
				return index;
			}
		}
	}

	for (; index < this.length; index++) {
		if (this[index] === undefined) continue;

		if (this[index] === searchElement) {
			return index;
		}
	}

	return -1;
};

Array.prototype.newJoin = function (separator = ",") {
	let newString = "";

	for (let index = 0; index < this.length; index++) {
		if (this[index] === undefined) {
			if (index === this.length - 1) {
				continue;
			}
			newString += `${separator}`;
			continue;
		}

		if (index === this.length - 1) {
			newString += `${this[index]}`;
			continue;
		}
		newString += `${this[index]}${separator}`;
	}

	return newString;
};

Array.prototype.newSlice = function (index, max) {
	const newArray = [];

	// Testa as regras de alcance do Metodo //
	if (index > this.length) {
		// Se o Index fornecido for maior que o comprimento do Array, retorna um Array vazio //
		return [];
	}

	if (index === undefined || index === null) {
		// Se o Index não for fornecido, percorre toda a extensão do Array //
		index = 0;
	} else if (index < 0) {
		if (Math.abs(index) > this.length) {
			// Se o Index fornecido for negativo e Maior que a extensão do Array, percorre toda a extensão do Array. //
			index = 0;
		}
	}

	// Se o Max não for fornecido ou for Maior que o Comprimento do Array, percorre toda a extensão do Array //
	if (max === undefined || max === null) {
		max = this.length;
	} else if (max > this.length) {
		max = this.length;
	} else if (max < 0) {
		// Se o Max fornecido for Negativo, defini o Max em relação ao final do Array //
		max = this.length + max;
	}

	// Se o Index fornecido for Negativo, defini o Max em relação ao final do Array //
	if (index < 0) {
		index = this.length + index;

		for (; index < max; index++) {
			if (this[index] === undefined) {
				newArray.length++;
				continue;
			}
			newArray[newArray.length] = this[index];
		}
		return newArray;
	}

	// Se o Indice for Positivo //
	for (; index < max; index++) {
		if (this[index] === undefined) {
			newArray.length++;
			continue;
		}

		newArray[newArray.length] = this[index];
	}

	return newArray;
};
