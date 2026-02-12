<template>
    <div class="footer-wrapper">
        <div>
            <a class="icon-contact" href="https://github.com/thomasguillet44" target="_blank">
                <i class="bi bi-github"></i>
            </a>
            <a class="icon-contact" href="https://www.linkedin.com/in/thomas-guillet-973036191/" target="_blank">
                <i class="bi bi-linkedin"></i>
            </a>
            <a class="icon-contact" href="https://mail.google.com/mail/?view=cm&fs=1&to=thomasguillet444@gmail.com" target="_blank">
                <i class="bi bi-envelope"></i>
            </a>
        </div>
        <a href="/CV_GUILLET_Thomas.pdf" download="CV_GUILLET_Thomas.pdf" class="button-download no-underline">
            <div class="content-button-download">
                CV <i class="bi bi-download"></i>
            </div> 
        </a> 
    </div>
</template>
<style scoped>
.footer-wrapper {
    display: grid;
    grid-template-rows: repeat(2, 8vh);
}

.icon-contact {
    display: inline-flex;
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

.button-download {
    display: flex;
    justify-content: center;
    align-items: center;     
    text-align: center;
    font-size: 3vh;
    color: white;
    background-color: black;
    border: 2px solid white;
    border-radius: 3px;
}

.button-download:hover {
    transform: translate(-2px, -2px);
    box-shadow: 3px 3px 0 white;
}

.no-underline {
    text-decoration: none;
}
</style>