// HEADER
var menu = new Vue({ 
	el: '#menu',   
	data: {				
	  isActive: false,					
	  menuList: ['Бизнес', 'О нас', 'Цены', 'Оформить заказ'],
	},
	methods: {		
		activeClassBurger: function () {	
			this.isActive = !this.isActive;  
	  	},
	}
})

// ORDER

var circle = new Vue({
	el: '#order',
	data: {
		orders: [
			{
        		image: 'glass',
				text: 'Lorem ipsum dolor sit amet',
        	},
			{
        		image: 'percent',
				text: 'Сonsecteturadipiscing elit',
        	},
			{
        		image: 'list',
				text: 'Sed do eiusmod tempor',
        	},
			{
        		image: 'mail',
				text: 'Esse cillum dolore eu fugiat',
        	},
			{
        		image: 'cash',
				text: 'Excepteur sint occaecat cupidatat non proident',
        	},

		]
	},
	methods: {
	}
})

// DROPDOWN

var dropdown = new Vue({       
	el: '#dropdown',           
	data: {						
	  selected: 'Выберите тип системы', 			
	  isActive: false,									
	  dropdownList: ['Sed ut perspiciatis', 'Nemo enim ipsam', 'Et harum quidem', 'Temporibus autem', 'Itaque earum rerum', 'Itaque earum rerum', 'Itaque earum rerum', 'Itaque earum rerum', 'Itaque earum rerum'],  // ну эт массивчик с данными списка
	},
	methods: {		
		activeClass: function () {				
			this.isActive = !this.isActive;  
	  	},

	  	writeInput: function (selectedNew) {  
			
			this.isActive = !this.isActive;
			this.selected = selectedNew;    
  		}
	}
})

// RANGE
var app = new Vue({
	el: '#range',
	data: {
	  value: 75
	},
	computed: {
		total: function () {
		return this.value
	  }
	}
  })

