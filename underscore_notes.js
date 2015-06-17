var tosser = {}
tosser.name = 'articles'
tosser.children = []
_.each(articles, function (value, key){
	var i = Object.keys(articles).indexOf(key);
	tosser.children.push( {'name': key, 'children': []} )
		
	phenotypes = _.groupBy(value, 'Phenotype')
	
	_.each(phenotypes, function(val, kee){
		var ii = Object.keys(phenotypes).indexOf(kee);
		tosser.children[i].children.push( {'name': kee, 'children':[]} )

		tt = []
		_.each(val, function(x, y){
			tt.push(x.Institution)
		})

		tt = _.uniq(tt)

		flower = []
		_.each(tt, function(y){
			ttt = []
			
			_.each(val, function(yy, xx){
				if (y == yy.Institution){
					ttt.push(tt)
				}
			})
			flower.push({'name': y, 'size': ttt.length})
		})

		tosser.children[i].children[ii].children.push( flower )
	})
})



console.log(JSON.stringify(tosser))