<template>
    <div class="title-contact Playfair Display">Socials :</div>

    <!--le target blank pour ouvrir dans un nouvel onglet-->
    <a class="icon-contact" href="https://github.com/thomasguillet44" target="_blank">
        <i class="bi bi-github"></i>
    </a>
    <a class="icon-contact" href="https://www.linkedin.com/in/thomas-guillet-973036191/" target="_blank">
        <i class="bi bi-linkedin"></i>
    </a>
    <a class="icon-contact" href="https://mail.google.com/mail/?view=cm&fs=1&to=thomasguillet444@gmail.com" target="_blank">
        <i class="bi bi-envelope"></i>
    </a>

    <a href="/cv-thomas-guillet.pdf" download="CV-Thomas-Guillet.pdf" class="button-download no-underline">
        <div class="content-button-download">
            CV <i class="bi bi-download"></i>
        </div> 
    </a> 
</template>
<style scoped>
.button-download {
    font-size: 3vh;
    color: white;
    background-color: black;
    border: 2px solid white;
    border-radius: 3px;
    margin-left: 30px;
    padding: 5px;
}

.button-download:hover {
    transform: translate(-2px, -2px);
    box-shadow: 3px 3px 0 white;
}

.icon-contact {
    padding: 5px;
    font-size: 3vh;
}

.icon-contact:hover {
    transform: translateY(-5px);
}

.title-contact {
    padding: 5px;
    font-size: 3vh;
}

.no-underline {
    text-decoration: none;
}
</style>