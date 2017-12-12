import path from 'path';
import express from 'express';
import posthtml from 'express-posthtml';

const app = express();
const plugins = [require('posthtml-cache')()];
const options = {};

app.engine('html', posthtml);
app.set('view engine', 'html');
app.set('views', './views');
app.set('view options', { plugins: plugins, options: options });

app.get('/', (req, res) => {
	res.render('index', function(err, html) {
		res.send(html);
	});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

