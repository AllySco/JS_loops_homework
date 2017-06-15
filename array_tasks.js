var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd );
		return arr;
	},

	square: function (arr) {
		var answer = arr.map(function(num) {
			return num*num;
		});
		return answer;
	},

	sum: function (arr) {
		var total = 0
		arr.forEach(function(num){
			total +=num;
		})
		return total;
	},

	findDuplicates: function (arr) {
		var result = [];
		arr.forEach(function(num, i){
			if (arr.indexOf(num, i+1) > -1) {
				if (result.indexOf(num) === -1) {
					result.push(num);
				}
			}
		})
		return result;
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArr = arr.filter(function(num, index) {
			if (num === valueToRemove) {
				return false
			} else {
				return true
			}
		})
		return newArr;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indices = [];
		var idx = arr.indexOf(itemToFind);
		while (idx != -1) {
		  indices.push(idx);
		  idx = arr.indexOf(itemToFind, idx + 1);
		}
		return indices;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var total = 0;
			arr.forEach(function(num){
				if (num % 2  != 1) {
					var square = num*num
					total += square;
				}
			})
			return total;
	}

}

module.exports = arrayTasks
