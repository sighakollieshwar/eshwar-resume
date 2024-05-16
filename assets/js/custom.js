$(document).ready(function(){
	var certName=GetURLParam("certName");
	console.log(certName);
	if(certName!="false"){
		if(certName.toLowerCase()=="aws"){
			LoadCertDetails("assets/img/portfolio/portfolio-1.jpg","AWS","Completed","Nov 23","Amazon","www.aws.com");
		}
		else if(certName.toLowerCase()=="redhat"){
			LoadCertDetails("assets/img/portfolio/portfolio-6.jpg","Red Hat Certified Enterprise Application Developer","Completed","05 March 2024","Red Hat","https://www.google.com");
		}
		else if(certName.toLowerCase()=="aws-ai_ml"){
			LoadCertDetails("assets/img/portfolio/portfolio-3.jpg","AI-ML Virtual Internship","Completed","June 2023","Amazon Web Services","https://www.google.com");
		}
		else if(certName.toLowerCase()=="oracle architect"){
			LoadCertDetails("assets/img/portfolio/portfolio-4.jpg","Oracle Cloud Architect","Completed","23 August 2023","Oracle University","https://www.google.com");
		}
		else if(certName.toLowerCase()=="oracle foundations"){
			LoadCertDetails("assets/img/portfolio/portfolio-7.jpg","Oracle Cloud Foundations","Completed","23 August 2023","Oracle University","https://www.google.com");
		}
		else if(certName.toLowerCase()=="aicte ai-ml"){
			LoadCertDetails("assets/img/portfolio/portfolio-2.jpg","AI-ML Virtual Internship","Completed","July 2023","AICTE","https://www.google.com");
		}
		else if(certName.toLowerCase()=="data analytics"){
			LoadCertDetails("assets/img/portfolio/portfolio-5.jpg","Data Analytics Virtual Internship","Completed","February 2023","AICTE","https://www.google.com");
		}
		
		
		
   
	}
});

function GetURLParam(param){
	
	var spageUrl=window.location.search.substring(1);
	var sURLVariables = spageUrl.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0].toLowerCase() === param.toLowerCase()) {
			return sParameterName [1] === undefined? true : decodeURIComponent(sParameterName[1]) ;
		}
	}

  return false;
}


function LoadCertDetails(certImage,name,status,date,from,url){
	$("#certImg").attr("src",certImage);
			$("#certificateName").html(name);
			$("#certificateStatus").html(status);
			$("#certificateDate").html(date);
			$("#certificateFrom").html(from);
			$("#certificateUrl").html("<a href='"+url+"'>Click Here</a>");
}
