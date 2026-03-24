---
title: Projects
description: Projects I have made
---

{{% blocks/cover 
  title="Projects"
  height="auto td-below-navbar"
  color="body border-top"
%}}

{{% param description %}}
{.display-6}

{{% /blocks/cover %}}

{{% blocks/section %}}
# Chatvious
{.text-center}

This is my biggest project I have made so far. I will go over a breif
overview of it right now but If you would like to know more, there is
a link at the bottom of this section that goes more in depth. This
project is a real time chat application and it's made with a few
different technologies which are shown below. With this project, I
went a more serverless approach on the design to learn more about
serverless technologies. There is a nice diagram about the
infrastructure in the more info page to show how this works visually
if you would like to see that.

{{% tech-stack %}}

{{% tech-group title="Front End" %}}
{{< tech-react >}}
{{< tech-tailwind >}}
{{< tech-typescript >}}
{{< tech-ejs >}}
{{% /tech-group %}}

{{% tech-cluster %}}

{{% tech-group title="Back End" %}}
{{< tech-nodejs >}}
{{< tech-typescript >}}
{{< tech-ejs >}}
{{< tech-aws >}}
{{< tech-aws-sam >}}
{{< tech-github-actions >}}
{{% /tech-group %}}

{{% tech-group title="AWS" %}}
{{< tech-lambda >}}
{{< tech-dynamodb >}}
{{< tech-cloudfront >}}
{{< tech-s3 >}}
{{< tech-api-gateway >}}
{{< tech-cognito >}}
{{% /tech-group %}}

{{% /tech-cluster %}}

{{% /tech-stack %}}

<!-- Relevent chatvious links -->
<div class="d-flex align-items-center gap-4">
  <a 
    class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
    href="https://main.chatvious.coding-wielder.com/"
    target="_blank"
  >
  Chatvious Website
  </a>
  <a class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
  href="chatvious/"
  >
  More Info About Chatvious
  </a>
  <a class="link-light" href="https://github.com/Julio-N-Coder/chatvious" target="_blank">
    <i class="fa-brands fa-github" style="font-size: 3rem;"></i>
  </a>
</div>

{{% /blocks/section %}}

{{% blocks/section %}}
# Navarro Gardening
{.text-center}
 
This is my first website I have made and hosted. This website is built
with tailwind and react. The Static Website content is hosted on AWS in
an s3 bucket that has cloudfront distributing the static content. The
website also has a lambda function backend in Nodejs that can be used to
send emails.
 
{{% tech-stack %}}
 
{{< tech-generic-frontend >}}
 
{{% tech-cluster %}}
 
{{% tech-group title="Back End" %}}
{{< tech-nodejs >}}
{{< tech-typescript >}}
{{< tech-aws >}}
{{% /tech-group %}}
 
{{% tech-group title="AWS" %}}
{{< tech-lambda >}}
{{< tech-cloudfront >}}
{{< tech-s3 >}}
{{< tech-api-gateway >}}
{{% /tech-group %}}
 
{{% /tech-cluster %}}
 
{{% /tech-stack %}}
 
<!-- Relevent Navarro Gardening links -->
<div class="d-flex align-items-center gap-4">
  <a 
    class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
    href="https://www.navarrogardening.com"
    target="_blank"
  >
  Navarro Gardening Website
  </a>
  <a class="link-light" href="https://github.com/Julio-N-Coder/NavarroGardening" target="_blank">
    <i class="fa-brands fa-github" style="font-size: 3rem;"></i>
  </a>
</div>

{{% /blocks/section %}}
 
{{% blocks/section %}}
# Portfolio Website
{.text-center}
 
This Section is to explain the current Website we are on. Below are the
Technoloiges used to build this website.
 
{{% tech-stack %}}
 <!-- Update frontend stack to hugo -->
{{< tech-generic-frontend >}}
 
{{% tech-cluster %}}
 
{{% tech-group title="Back End" %}}
{{< tech-aws >}}
{{< tech-github-actions >}}
{{% /tech-group %}}
 
{{% tech-group title="AWS" %}}
{{< tech-cloudfront >}}
{{< tech-s3 >}}
{{% /tech-group %}}
 
{{% /tech-cluster %}}
 
{{% /tech-stack %}}
 
<!-- Relevent Portfolio links -->
<div class="d-flex align-items-center gap-4">
  <a class="link-dark" href="https://github.com/Julio-N-Coder/portfolio" target="_blank">
    <i class="fa-brands fa-github" style="font-size: 3rem;"></i>
  </a>
</div>

{{% /blocks/section %}}
 
{{% blocks/section %}}
# Job Tracker
{.text-center}
 
This project is a Job Tracking project and it's simply called Job
Tracker. This project lets you track job applications. You can add
jobs, update their status, remove jobs, and make multiple accounts to
manage different jobs.
 
{{% tech-stack %}}
 
{{< tech-generic-frontend >}}
 
{{% tech-group title="Back End" %}}
{{< tech-java >}}
{{< tech-spring-boot >}}
{{% /tech-group %}}
 
{{% /tech-stack %}}
 
<!-- Relevent Job Tracker links -->
<div class="d-flex align-items-center gap-4">
  <a class="link-dark" href="https://github.com/Julio-N-Coder/Job-Tracker" target="_blank">
    <i class="fa-brands fa-github" style="font-size: 3rem;"></i>
  </a>
</div>

{{% /blocks/section %}}
