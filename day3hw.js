Vue.component('makeup',{
	'props':['brand','name','price','image_link','rating','product_type','product_api_url','product_colors'],
	'template':`
			<div class="col-md-6">
				<div class="panel panel-default panel-hvr">
				    <div class="panel-body" style="height: 300px;">
						<div class="col-xs-6">
						  <img class="img-responsive" :src="image_link"/>

						</div>
						<div class="col-xs-6">
						  <h3>{{brand}}</h3>
						  <h4>{{name}}</h4>
						  <p>$ {{price}}</p>
						  <span class="glyphicon glyphicon-star" aria-hidden='true'></span>{{rating}}
						  <p><a class="btn btn-default" :href="product_api_url">Show</a></p>
						</div>
						<div class="col-md-12">
							  <div class="col-md-1 col-sm-1 col-xs-1" :style="{ 'background-color': product_colors.hex_value}">
								
							  </div>
					    </div>
				    </div>
				</div>
			</div>
		`
	,});
	
