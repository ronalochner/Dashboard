//Stylesheet Buttons
var templates = [
   { id: 1, name: 'Dark', value: 'css/dark.css', logo: 'css/dark.css'},
   { id: 2, name: 'Light', value: 'css/light.css', logo: 'css/light.css'}
   ];

//DataTables
var tabledata = [
   {month:'January', income:'5400', expenses:'300', hours:'50'},
   {month:'February', income:'3400', expenses:'300', hours:'100'},
   {month:'March', income:'2400', expenses:'300', hours:'12'},
   {month:'April', income:'5700', expenses:'300', hours:'45'},
]

var app = new Vue ({
   el:'#app',
   data:{
      newIncome:'',
      newExpenses:'',
      newHours:'',
      tabledata:tabledata,
      checked:false,
      templates:templates,
      default_template: 2,
      current_template: templates[0]
   },
   methods: {
       tableHeader: function(tableData) {
      var keys = [];
      for(key in tableData[0]){
        keys.push(key);
      }
      return keys;
    },
      setTemplate: function(id) {
      var selected_template = this.templates.filter(function(ele){
      return (ele.id == id)
      })[0];

      this.current_template = selected_template;
   },
      incomeCount: function() {
      result = this.tabledata.map((item) => {
        return parseInt(item.income);
      })
      return result.reduce((a, b) => a + b, 0)
    },
      expenseCount: function() {
      result = this.tabledata.map((item) => {
        return parseInt(item.expenses);
      })
      return result.reduce((a, b) => a + b, 0)
    },
      hoursCount: function() {
      result = this.tabledata.map((item) => {
        return parseInt(item.hours);
      })
      return result.reduce((a, b) => a + b, 0)
    },
     revenueCount: function() {
        return this.incomeCount () - this.expenseCount ()
     },
      newItem: function () {
      return this.newIncome
   }
}
   
})
