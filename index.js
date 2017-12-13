import path from 'path';
import express from 'express';
import posthtml from 'express-posthtml';

const app = express();
const plugins = [];
const options = {};

app.engine('html', posthtml);
app.set('view engine', 'html');
app.set('views', './views');
app.set('view options', { plugins: plugins, options: options });

app.use('/static', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
	res.render('index', function(err, html) {
		res.set({
			'Content-Security-Policy': 
				'script-src \'strict-dynamic\' \'nonce-2726c7f26c\';' +
				'style-src \'nonce-2726c7f26c\';' + 
				'img-src \'nonce-2726c7f26c\''	
		});
		res.send(html);
	});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

