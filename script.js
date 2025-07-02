const mainDiv = document.getElementById('main');
const movies = [
    {
		image:"https://i.pinimg.com/736x/31/b1/ea/31b1ea4c9e3d8302460b69f00e31c74a.jpg",
		title: "Puspa 2",
		
	},
	{
		image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg",
		title: "Puspa 1",
		
	},
	{
		image:"https://m.media-amazon.com/images/M/MV5BMmY1ZjBmYzQtMmIyYS00Yzk3LTg5ZDYtZWM1ZTRkYTE3MWZlXkEyXkFqcGc@._V1_.jpg",
		title: "Ala Vaikuntapuramlo",
		
	},
	{
		image:"https://upload.wikimedia.org/wikipedia/en/8/8c/Naa_Peru_Surya%2C_Naa_Illu_India.jpg",
		title: "Naa Peru Surya Naa Illu India",
		
	},
    	{
		image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/duvvada-jagannadham-et00053548-15-02-2017-11-18-32.jpg",
		title: "Duvvada Jagannadham(DJ)",
		
	},
    	{
		image:"https://cinemachaat.com/wp-content/uploads/2015/10/rudramadevi-posters-2.jpg",
		title: "Rudramadevi",
		
	},
    	{
		image:"https://images.justwatch.com/poster/15737184/s718/son-of-satyamurthy.jpg",
		title: "Son Of Satyamurthy",
		
	},
    	{
		image:"https://upload.wikimedia.org/wikipedia/en/6/64/Race_Gurram_%28film%29_poster.jpg",
		title: "Race Gurram",
		
	},
    	{
		image:"https://m.media-amazon.com/images/M/MV5BNDlhZjFlNjMtNTFiZC00OGU3LWIxMTktMjQzZGZkZTE5ZjU0XkEyXkFqcGc@._V1_.jpg",
		title: "Iddarammayilatho",
		
	},
    	{
		image:"https://m.media-amazon.com/images/M/MV5BZmZjZTdlODctOWJiMy00N2NlLTg4Y2YtOWYxNDZmMDZjYTg4XkEyXkFqcGc@._V1_.jpg",
		title: "Julayi",
		
	},
    	{
		image:"https://resizing.flixster.com/_SJHgXYFi9d3X-sz88EIPC7gAHA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhlZTIzMjZjLWFjZTYtNGI2Ni04MjRhLWI2MmJhYmVmMWJiNC53ZWJw",
		title: "Badrinath",
		
	},
    	{
		image:"https://static.toiimg.com/thumb/msid-76191620,width-400,resizemode-4/76191620.jpg",
		title: "Vedam",
		
	},
    	{
		image:"https://images.moviebuff.com/45c722cf-f460-4c2b-b788-75d342c119ae?w=600",
		title: "Varudu",
		
	},
    	{
		image:"https://sund-images.sunnxt.com/9999/1000x1500_Arya2_9999_04f2bada-03ea-446b-86ee-b21c9607f8bd.jpg",
		title: "Arya 2",
		
	},
    	{
		image:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Parugu_poster.jpg/250px-Parugu_poster.jpg",
		title: "Parugu",
		
	},
    	{
		image:"https://assetscdn1.paytm.com/images/cinema/Desamuduru-(2007)--608x800-7035ca10-d1e6-11ed-9efc-2b8a0ca50eea.jpg",
		title: "Desamuduru",
		
	},
    	{
		image:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12918340_p_v7_aa.jpg",
		title: "Happy",
		
	},
    	{
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5englG9JKbuw498PZP4XTA1RjvgIvFA3JN4_AN7doaYelsB8aIrZm48Kbd6ImqfmkpRQ&usqp=CAU",
		title: "Bunny",
		
	},
    	{
		image:"https://upload.wikimedia.org/wikipedia/en/3/3d/Aarya_Telugu_Movie.jpg",
		title: "Arya",
		
	},
    	{
		image:"https://images.justwatch.com/poster/319818558/s718/gangotri.jpg",
		title: "Gangotri",
		
	},
    	

]
    function displaymovies ()
{
    movies.forEach(function (ele, ind)
    {
        const div = document.createElement('div');
        div.classList.add('movie')
        const image = document.createElement('img');
        image.src = ele.image;
        const button = document.createElement('button');
        button.textContent = ele.title;
        div.append(image, button);
        mainDiv.appendChild(div)
    })
}
displaymovies();