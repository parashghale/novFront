var obj = {
	value: 11,
	testF: function(){
		console.log(this.value)

	}.bind()
}

obj.testF();