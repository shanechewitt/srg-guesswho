import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-game',
    templateUrl: './game-page.component.html',
    styleUrls: ['./game-page.component.css'],
    imports: [CommonModule]
})
export class GameComponent implements OnInit {
    faces: any = [];
    myTurn: boolean = false;

    filenames = [
    '1655430860853.jpg',
    '5484d9d1eab8ea3017b17e29.webp',
    'KOA_Nassau_2697x1517.jpg',
    'Small-dogs-960x640.jpg',
    'american-bully-stock-gty-jef-230915_1694791277879_hpMain_16x9.avif',
    'angry_chihuahua.png',
    'cute-french-bulldog-close-up-eye-contact-outdoors-825x550.jpg',
    'dog-4203732_1920.jpg',
    'dog-barking-mouth-open-teeth-showing.jpg',
    'dog-puppy-on-garden-royalty-free-image-1586966191.jpg',
    'download.jpg',
    'golden-retriever-puppy.jpg',
    'happy-samoyed-dog-outdoors-in-summer-field.jpg',
    'images.jpg',
    'maltese-portrait.jpg',
    'russian-toy-2-002--059b8a825dac13f92234d65777e6b29b0914e92f-s1100-c50.jpg',
    'shelter-dog-cropped-1.jpg',
    'small-dog-owners-1.jpg',
    'spoiled-dogs_-7.webp',
    'tan-brussels-griffon-grass-179861205-2000-e7d8a67dba0c4491b962e34bcf8e4f51.jpg',
    'vet-viewpoints-june22-dog-right-aligned.jpg',
    'white-dog-breeds-4846529-hero-4bf084c93c5b45a292e30559bb7e50e8.jpg',
    'wild-dog.jpg',
    'worlds-smallest-dogs-1647336453.jpg'
    ]
    ngOnInit(): void {
        this.createMockFaces();
        // this.createFaces();
    }

    createMockFaces() {
        for (let i = 0; i < 24; i++) {
            this.faces.push({
                id: i,
            })
        }
    }

    determineBlurFace(index: number) {
        const faceInQuestion = document.querySelectorAll('.face-container')[index];
        if (faceInQuestion.classList.contains('blur')) {
            this.unblurFace(index);
        } else {
            this.blurFace(index);
        }
    }

    blurFace(index: number) {
        document.querySelectorAll('.face-container')[index].classList.add('blur');
    }
    
    unblurFace(index: number) {
        document.querySelectorAll('.face-container')[index].classList.remove('blur');
    }

    resetFaceBlurs() {
        const allFaces = document.querySelectorAll('.face-container');
        allFaces.forEach((face) => face.classList.remove('blur'));
    }

    flipTurn() {
        this.myTurn = !this.myTurn;
    }

    createFaces() {
        document.querySelectorAll('.face-container').forEach((fc, i) => {
            fc.innerHTML = "<img src='../../assets/SRG-images/" + this.filenames[i] + "' />"
        })
    }

    playerOnePlus() {

    }
}