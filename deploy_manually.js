import ghpages from 'gh-pages';

console.log('Starting deployment to https://github.com/chixun1314/homepage.git...');

ghpages.publish('dist', {
    repo: 'https://github.com/chixun1314/homepage.git',
    message: 'feat: add privacy policy and fix deployment settings'
}, function (err) {
    if (err) {
        console.error('Deployment failed:');
        console.error(err);
        process.exit(1);
    } else {
        console.log('Successfully published to gh-pages branch!');
        process.exit(0);
    }
});
