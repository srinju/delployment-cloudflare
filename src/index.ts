/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {

}

//in package.json if you will see there is no express an a dependency . and we didnt mention any port anywhere it is what cloud flare does they initialise our projects route to a 8787 route
//and we will see there is wrangler as a dependency in the package.json file , wrangler is nothing but the command line interface for cloudflare

export default {
	async fetch(request : Request , env : Env , ctx : ExecutionContext) : Promise<Response> { //Promise<Response>: This means the function returns a promise that will eventually resolve to a Response object.
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method); //this shows the method of the request we are sending , if we go to postman and send the request as post then in the terminal it will show us that the request sent is post request 

		//we use libraries to make routing easy here coz in this without libraries it gets very complicated to do routing when developing the backend of the application in this project of cloudflare
		
		//deploying our application to the world >>
		//in our terminal we can run npx wrangler login ---wrangler is the cli and we can login to our cloudflare account running this command in our terminal of the project 
		//to see ur account information run the command -- npx wrangler whoami
		//now to deploy your backend to the internet you can run -- npm run deploy
		//and your backend is up and running on the internet under cloudflare
		//URL that we got is >> https://cloudflare-app.dassrinjoy333.workers.dev this has our backend running
		//one of the cloudflare worker is assigned to the backend server wherever it is there
		//again this serverless architecture is used for small traffic ..when you want to pay for per request this backend gets hit and for getting our fullstack application up and running


		if(request.method == "GET") {
			return Response.json({
				message : " you sent a get request!!"
			});
		} else {
			return Response.json({
				message : "you did not send a get request!!"
			});
		}
	}
}
