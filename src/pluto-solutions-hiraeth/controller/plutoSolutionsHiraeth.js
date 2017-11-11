/// <reference path="../angular/angular.min.js" />

var app = angular.module('plutoHiraeth', []);

app.controller("plutoHiraethControl", ['$scope', function ($scope) {
    $scope.header = {
        brand: {
            image: 'bootstrap/images/logo.png',
            url: "#"
        },
        services: {
            name: "Services",
            items: [
                { name: "Access Request", url: "#" },
                { name: "Hardware Provisioning", url: "#" },
                { name: "Software Instsallation", url: "#" },
                { name: "Password Reset", url: "#" },
                { name: "Backup Service", url: "#" }
            ],
            dividerItem: {
                name: "New Employee Hire",
                url: "#"
            }
        },
        menu: [
            { name: "Home", url: "#", style: "active", position: 1 },
            { name: "Portfolio", url: "#", style: "", position: 1 },
            { name: "About", url: "#", style: "", position: 2 },
            { name: "Contact", url: "#", style: "", position: 2 },
        ]
    }

    $scope.slides = [
        {
            image: "bootstrap/slider/csss_images1/1.jpg",
            title: "",
            alt: "",
            style: "cs_skeleton"
        },
        {
            image: "bootstrap/slider/csss_images1/1.jpg",
            title: "abstract-desktop-wallpaper-widescreen-top-model-computers-wallpapers-wallwuzz-hd-wallpaper-10823",
            alt: "abstract-desktop-wallpaper-widescreen-top-model-computers-wallpapers-wallwuzz-hd-wallpaper-10823",
            style: "num0 img slide"
        },
        {
            image: "bootstrap/slider/csss_images1/2.jpg",
            title: "aura_rays_hd_1080p-HD",
            alt: "aura_rays_hd_1080p-HD",
            style: "num1 img slide"
        },
        {
            image: "bootstrap/slider/csss_images1/3.jpg",
            title: "qxt1j-wallpapers-515728052-1920x1080",
            alt: "qxt1j-wallpapers-515728052-1920x1080",
            style: "num2 img slide"
        },
        {
            image: "bootstrap/slider/csss_images1/4.jpg",
            title: "wpid-Abstract-Colorful-Wallpaper-Hd-0",
            alt: "wpid-Abstract-Colorful-Wallpaper-Hd-0",
            style: "num3 img slide"
        }
    ]

    $scope.posts = {
        title: 'Interior design is "the art or process of designing"',
        description: 'Interior design is "the art or process of designing the interior decoration of a room or building".An interior designer is someone who coordinates and manages such projects.',
        list: [
            {
                image: "bootstrap/images/1.jpg",
                title: "Interior Designs",
                url: "#",
                description: "Interior design is a multifaceted profession that includes conceptual development, communicating with the stakeholders of a project and the management and execution of the design."
            },
            {
                image: "bootstrap/images/2.jpg",
                title: "Interior Designs",
                url: "#",
                description: "Interior design is a multifaceted profession that includes conceptual development, communicating with the stakeholders of a project and the management and execution of the design."
            },
            {
                image: "bootstrap/images/3.jpg",
                title: "Interior Designs",
                url: "#",
                description: "Interior design is a multifaceted profession that includes conceptual development, communicating with the stakeholders of a project and the management and execution of the design."
            },
            {
                image: "bootstrap/images/4.jpg",
                title: "Interior Designs",
                url: "#",
                description: "Interior design is a multifaceted profession that includes conceptual development, communicating with the stakeholders of a project and the management and execution of the design."
            }
        ]
    }
}]);