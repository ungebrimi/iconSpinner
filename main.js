import './style.css'
import * as THREE from 'three'
import * as dat from 'lil-gui'


/**
 * Debug
 */
const gui = new dat.GUI({
  width: 400
}) 

/**
 * Setup
 */
const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const textureLoader = new THREE.TextureLoader()
/**
 * Objects
 */
// Groups
const firstRing = new THREE.Group()
scene.add(firstRing)
firstRing.rotation.x = 1.5
firstRing.position.y = -.038
firstRing.rotation.z = 12

const secondRing = new THREE.Group()
scene.add(secondRing)
secondRing.rotation.x = 1.56
secondRing.rotation.y = 0.7
secondRing.rotation.z = 11.8

const thirdRing = new THREE.Group()
scene.add(thirdRing)
thirdRing.rotation.x = 1.56
thirdRing.rotation.y = 2.54
thirdRing.rotation.z = 6

const fourthRing = new THREE.Group()
scene.add(fourthRing)
fourthRing.rotation.y = 1.56
fourthRing.rotation.z = 0

/**
 * ICONS
 */
const vTexture = textureLoader.load('companyLogo/v.png')
const mainLogo = new THREE.Mesh(
  new THREE.BoxBufferGeometry(10, 10, 10),
  new THREE.MeshBasicMaterial({
    transparent: true,
    map: vTexture,
  })
)
scene.add(mainLogo)

// Rotating Icons
const autocadTexture = textureLoader.load('companyLogo/AutoCAD.png')
const icon1 = new THREE.Mesh(
    new THREE.PlaneGeometry(2.5, 2.5),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: autocadTexture
            }
        )
)
firstRing.add(icon1)
icon1.position.x = 20
icon1.rotation.set(1.54, 1.53, 3.2)

const ring1Folder = gui.addFolder('icon1 rotation')
ring1Folder.add(icon1.rotation, 'x').min(-20).max(20).step(0.01).name('icon1')
ring1Folder.add(icon1.rotation, 'y').min(-20).max(20).step(0.01).name('icon1')
ring1Folder.add(icon1.rotation, 'z').min(-20).max(20).step(0.01).name('icon1')

const blenderTexture = textureLoader.load('companyLogo/Blender.png')
const icon2 = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: blenderTexture
            }
        )
)
firstRing.add(icon2)
icon2.position.x = 9.23
icon2.position.y = 17.84
icon2.rotation.set(1.8, 0, 0.8)

ring1Folder.add(icon2.rotation, 'x').min(-20).max(20).step(0.01).name('icon2')
ring1Folder.add(icon2.rotation, 'y').min(-20).max(20).step(0.01).name('icon2')
ring1Folder.add(icon2.rotation, 'z').min(-20).max(20).step(0.01).name('icon2')

const chaosTexture = textureLoader.load('companyLogo/Chaos.png')
const icon3 = new THREE.Mesh(
    new THREE.CircleBufferGeometry(1, 20),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: chaosTexture
            }
        )
)
firstRing.add(icon3)
icon3.position.x = -11.89
icon3.position.y = 16.01
icon3.rotation.set(-1.39, -1.1, 0.206)

ring1Folder.add(icon3.rotation, 'x').min(-20).max(20).step(0.01).name('icon3')
ring1Folder.add(icon3.rotation, 'y').min(-20).max(20).step(0.01).name('icon3')
ring1Folder.add(icon3.rotation, 'z').min(-20).max(20).step(0.01).name('icon3')


const characterTexture = textureLoader.load('companyLogo/character.png')
const icon4 = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 3),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: characterTexture
            }
        )
)
firstRing.add(icon4)
icon4.position.x = -19.97
icon4.position.y = -1.98
icon4.rotation.set(-1.39, 0.821, -0.16)

ring1Folder.add(icon4.rotation, 'x').min(-20).max(20).step(0.01).name('icon4')
ring1Folder.add(icon4.rotation, 'y').min(-20).max(20).step(0.01).name('icon4')
ring1Folder.add(icon4.rotation, 'z').min(-20).max(20).step(0.01).name('icon4')


const cinema4DTexture = textureLoader.load('companyLogo/Cinema4D.png')
const icon5 = new THREE.Mesh(
    new THREE.PlaneGeometry(3.3, 3.3),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: cinema4DTexture,
            }
        )
)
firstRing.add(icon5)
icon5.position.x = -8.76
icon5.position.y = -17.89
icon5.rotation.set(-1.64, -0.04, 0)

ring1Folder.add(icon5.rotation, 'x').min(-20).max(20).step(0.01).name('icon5')
ring1Folder.add(icon5.rotation, 'y').min(-20).max(20).step(0.01).name('icon5')
ring1Folder.add(icon5.rotation, 'z').min(-20).max(20).step(0.01).name('icon5')


const coronaTexture = textureLoader.load('companyLogo/Corona.png')
const icon6 = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 3),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: coronaTexture
            }
        )
)
firstRing.add(icon6)
icon6.position.x = 10.8
icon6.position.y = -16.82
icon6.rotation.set(-1.52, 2.54, -.04)

ring1Folder.add(icon6.rotation, 'x').min(-20).max(20).step(0.01).name('icon6')
ring1Folder.add(icon6.rotation, 'y').min(-20).max(20).step(0.01).name('icon6')
ring1Folder.add(icon6.rotation, 'z').min(-20).max(20).step(0.01).name('icon6')

ring1Folder.close()
// ring 2
const daz3DTexture = textureLoader.load('companyLogo/Daz3D.png')
const icon7 = new THREE.Mesh(
    new THREE.PlaneGeometry(4.5, 4.5),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: daz3DTexture
            }
        )
)
secondRing.add(icon7)
icon7.position.x = 20
icon7.rotation.set(1.56, -1.85, -2.62)
const ring2Folder = gui.addFolder('ring2 folder')
ring2Folder.add(icon7.rotation, 'x').min(-20).max(20).step(0.01).name("icon7")
ring2Folder.add(icon7.rotation, 'y').min(-20).max(20).step(0.01).name("icon7")
ring2Folder.add(icon7.rotation, 'z').min(-20).max(20).step(0.01).name("icon7")

const facewareTexture = textureLoader.load('companyLogo/Faceware.png')
const icon8 = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 3),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: facewareTexture
            }
        )
)
secondRing.add(icon8)
icon8.position.x = 9.23
icon8.position.y = 17.84
icon8.rotation.set(4.31, 0.76, -0.5)

ring2Folder.add(icon8.rotation, 'x').min(-20).max(20).step(0.01).name("icon8")
ring2Folder.add(icon8.rotation, 'y').min(-20).max(20).step(0.01).name("icon8")
ring2Folder.add(icon8.rotation, 'z').min(-20).max(20).step(0.01).name("icon8")

const headshotTexture = textureLoader.load('companyLogo/headshot.png')
const icon9 = new THREE.Mesh(
    new THREE.CircleBufferGeometry(1.3, 20),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: headshotTexture
            }
        )
)
secondRing.add(icon9)
icon9.position.x = -11.89
icon9.position.y = 16.01
icon9.rotation.set(4.67, -0.29, -0.81)

ring2Folder.add(icon9.rotation, 'x').min(-20).max(20).step(0.01).name("icon9")
ring2Folder.add(icon9.rotation, 'y').min(-20).max(20).step(0.01).name("icon9")
ring2Folder.add(icon9.rotation, 'z').min(-20).max(20).step(0.01).name("icon9")

const icloneTexture = textureLoader.load('companyLogo/iclone.png')
const icon10 = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 3),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: icloneTexture
            }
        )
)
secondRing.add(icon10)
icon10.position.x = -19.97
icon10.position.y = -1.98
icon10.rotation.set(1.44, -1.2, -3.9)

ring2Folder.add(icon10.rotation, 'x').min(-20).max(20).step(0.01).name("icon10")
ring2Folder.add(icon10.rotation, 'y').min(-20).max(20).step(0.01).name("icon10")
ring2Folder.add(icon10.rotation, 'z').min(-20).max(20).step(0.01).name("icon10")

const irayTexture = textureLoader.load('companyLogo/Iray.png')
const icon11 = new THREE.Mesh(
    new THREE.PlaneGeometry(2.5, 2.5),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: irayTexture
            }
        )
)
secondRing.add(icon11)
icon11.position.x = -8.76
icon11.position.y = -17.89
icon11.rotation.set(8.06, -0.81, -3.7)

ring2Folder.add(icon11.rotation, 'x').min(-20).max(20).step(0.01).name("icon11")
ring2Folder.add(icon11.rotation, 'y').min(-20).max(20).step(0.01).name("icon11")
ring2Folder.add(icon11.rotation, 'z').min(-20).max(20).step(0.01).name("icon11")

const leicaTexture = textureLoader.load('companyLogo/Leica.png')
const icon12 = new THREE.Mesh(
    new THREE.PlaneGeometry(4, 4),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: leicaTexture
            }
        )
)
secondRing.add(icon12)
icon12.position.x = 10.8
icon12.position.y = -16.82
icon12.rotation.set(1.28, 0.76, 2.58)

ring2Folder.add(icon12.rotation, 'x').min(-20).max(20).step(0.01).name("icon12")
ring2Folder.add(icon12.rotation, 'y').min(-20).max(20).step(0.01).name("icon12")
ring2Folder.add(icon12.rotation, 'z').min(-20).max(20).step(0.01).name("icon12")

ring2Folder.close()

// Ring3

const matterportTexture = textureLoader.load('companyLogo/Matterport.png')
const icon13 = new THREE.Mesh(
    new THREE.PlaneGeometry(2.7, 2.7),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: matterportTexture
            }
        )
)
thirdRing.add(icon13)
icon13.position.x = 20
icon13.rotation.set(2.7, 1.8, -0.6)

const ring3Folder = gui.addFolder('ring3 rotation')
ring3Folder.add(icon13.rotation, 'x').min(-20).max(20).step(0.01)

const maxTexture = textureLoader.load('companyLogo/max.png')
const icon14 = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 3),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: maxTexture
            }
        )
)
thirdRing.add(icon14)
icon14.position.x = 9.23
icon14.position.y = 17.84
icon14.rotation.set(-1.59, 0.23, 3.77)

ring3Folder.add(icon14.rotation, 'x').min(-20).max(20).step(0.01)
ring3Folder.add(icon14.rotation, 'y').min(-20).max(20).step(0.01)
ring3Folder.add(icon14.rotation, 'z').min(-20).max(20).step(0.01)

const mayaTexture = textureLoader.load('companyLogo/Maya.png')
const icon15 = new THREE.Mesh(
    new THREE.CircleBufferGeometry(1, 20),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: mayaTexture
            }
        )
)
thirdRing.add(icon15)
icon15.position.x = -11.89
icon15.position.y = 16.01
icon15.rotation.set(1.8, -2.37, 0.821)

ring3Folder.add(icon15.rotation, 'x').min(-20).max(20).step(0.01)
ring3Folder.add(icon15.rotation, 'y').min(-20).max(20).step(0.01)
ring3Folder.add(icon15.rotation, 'z').min(-20).max(20).step(0.01)

const neuronTexture = textureLoader.load('companyLogo/neuron.png')
const icon16 = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 3),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: neuronTexture
            }
        )
)
thirdRing.add(icon16)
icon16.position.x = -19.97
icon16.position.y = -1.98
icon16.rotation.set(2.84, 1.54, -3.24)

ring3Folder.add(icon16.rotation, 'x').min(-20).max(20).step(0.01)
ring3Folder.add(icon16.rotation, 'y').min(-20).max(20).step(0.01)
ring3Folder.add(icon16.rotation, 'z').min(-20).max(20).step(0.01)

const pix4DTexture = textureLoader.load('companyLogo/Pix4D.png')
const icon17 = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: pix4DTexture
            }
        )
)
thirdRing.add(icon17)
icon17.position.x = -8.76
icon17.position.y = -17.89
icon17.rotation.set(-1.42, -2.52, 3.91)

ring3Folder.add(icon17.rotation, 'x').min(-20).max(20).step(0.01)
ring3Folder.add(icon17.rotation, 'y').min(-20).max(20).step(0.01)
ring3Folder.add(icon17.rotation, 'z').min(-20).max(20).step(0.01)

const reallusionTexture = textureLoader.load('companyLogo/Reallusion.png')
const icon18 = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: reallusionTexture
            }
        )
)
thirdRing.add(icon18)
icon18.position.x = 10.8
icon18.position.y = -16.82
icon18.rotation.set(-1.64, 2.58, -2.5)

ring3Folder.add(icon18.rotation, 'x').min(-20).max(20).step(0.01)
ring3Folder.add(icon18.rotation, 'y').min(-20).max(20).step(0.01)
ring3Folder.add(icon18.rotation, 'z').min(-20).max(20).step(0.01)

ring3Folder.close()

//Ring 4
const revitTexture = textureLoader.load('companyLogo/Revit.png')
const icon19 = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: revitTexture
            }
        )
)
fourthRing.add(icon19)
icon19.position.x = 20
icon19.rotation.set(1.44, 2, 1.54)

const ring4Folder = gui.addFolder('ring4 folder')
ring4Folder.add(icon19.rotation, 'x').min(-20).max(20).step(0.01)
ring4Folder.add(icon19.rotation, 'y').min(-20).max(20).step(0.01)
ring4Folder.add(icon19.rotation, 'z').min(-20).max(20).step(0.01)

const sketchfabTexture = textureLoader.load('companyLogo/Sketchfab.png')
const icon20 = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: sketchfabTexture
            }
        )
)
fourthRing.add(icon20)
icon20.position.x = 9.23
icon20.position.y = 17.84
icon20.rotation.set(1.44, 2.84, -0.55)

ring4Folder.add(icon20.rotation, 'x').min(-20).max(20).step(0.01)
ring4Folder.add(icon20.rotation, 'y').min(-20).max(20).step(0.01)
ring4Folder.add(icon20.rotation, 'z').min(-20).max(20).step(0.01)

const unityTexture = textureLoader.load('companyLogo/Unity.png')
const icon21 = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: unityTexture
            }
        )
)
fourthRing.add(icon21)
icon21.position.x = -11.89
icon21.position.y = 16.01
icon21.rotation.set(1.44, -2.37, 35)

ring4Folder.add(icon21.rotation, 'x').min(-20).max(20).step(0.01)
ring4Folder.add(icon21.rotation, 'y').min(-20).max(20).step(0.01)
ring4Folder.add(icon21.rotation, 'z').min(-20).max(20).step(0.01)

const unrealTexture = textureLoader.load('companyLogo/Unreal.png')
const icon22 = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: unrealTexture
            }
        )
)
fourthRing.add(icon22)
icon22.position.x = -19.97
icon22.position.y = -1.98
icon22.rotation.set(1.56, 1.8, -1.64)

ring4Folder.add(icon22.rotation, 'x').min(-20).max(20).step(0.01)
ring4Folder.add(icon22.rotation, 'y').min(-20).max(20).step(0.01)
ring4Folder.add(icon22.rotation, 'z').min(-20).max(20).step(0.01)

const vectaryTexture = textureLoader.load('companyLogo/Vectary.png')
const icon23 = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 3),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: vectaryTexture
            }
        )
)
fourthRing.add(icon23)
icon23.position.x = -8.76
icon23.position.y = -17.89
icon23.rotation.set(1.44, -0.55, 1.189)

ring4Folder.add(icon23.rotation, 'x').min(-20).max(20).step(0.01)
ring4Folder.add(icon23.rotation, 'y').min(-20).max(20).step(0.01)
ring4Folder.add(icon23.rotation, 'z').min(-20).max(20).step(0.01)

const zephyrTexture = textureLoader.load('companyLogo/Zephyr.png')
const icon24 = new THREE.Mesh(
    new THREE.PlaneGeometry(4, 4),
        new THREE.MeshBasicMaterial(
            {
                transparent: true,
                side: THREE.DoubleSide,
                map: zephyrTexture
            }
        )
)
fourthRing.add(icon24)
icon24.position.x = 10.8
icon24.position.y = -16.82
icon24.rotation.set(7.54, 0.5, 1.72)
fourthRing.rotation.z = 10.5

ring4Folder.add(icon24.rotation, 'x').min(-20).max(20).step(0.01)
ring4Folder.add(icon24.rotation, 'y').min(-20).max(20).step(0.01)
ring4Folder.add(icon24.rotation, 'z').min(-20).max(20).step(0.01)

ring4Folder.close()

/**
 * Sizes
 */

 const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// handles resize of the browser window
window.addEventListener('resize', () =>
{
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 *  Camera 
 */

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000)
camera.position.z = 100
scene.add(camera)

/**
 * Raycaster
 */
// fetch the dom elements
const currentIconTitle = document.querySelector('.current__icon-title')
const currentIconInfo = document.querySelector('.current__icon-info')
// set the raycaster
const raycaster = new THREE.Raycaster()
let currentIntersect = null

// store mouse position in a vector 2 object. x/y axis
let mouse = new THREE.Vector2()
mouse.x = 0
mouse.y = 0

// this listener add where the mouse is located to mouse vector object
window.addEventListener('mousemove', (event) =>
{
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
})




const objectsToIntersect =
[
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon11,
    icon12,
    icon13,
    icon14,
    icon15,
    icon16,
    icon17,
    icon18,
    icon19,
    icon20,
    icon21,
    icon22,
    icon23,
    icon24         
]

window.addEventListener('pointerdown', () =>
{
  if(currentIntersect)
  {
    switch(currentIntersect.object)
    {
        case icon1:
            currentIconTitle.innerText = "AutoCad"
            currentIconInfo.innerText = "Software used for 3D drafting, design, and modeling with solids, surfaces, mesh objects."
            break
        case icon2:
            currentIconTitle.innerText = "Blender"
            currentIconInfo.innerText = "3D software used for the 3D pipeline artwork from modeling, rigging, animation, simulation, rendering,motion-tracking to task automation with scripts."
            break
        case icon3:
            currentIconTitle.innerText = "Chaos"
            currentIconInfo.innerText = "Suite of products used for high-quality, physically based shading production rendering."
            break
        case icon4:
            currentIconTitle.innerText = "Character Creator"
            currentIconInfo.innerText = "Software used for our full character creation pipeline to customize 3D human character genders and ethinicity."
            break
        case icon5:
            currentIconTitle.innerText = "Cinema4D"
            currentIconInfo.innerText = "Software used for our professional 3D modeling, animation, simulation and rendering solution."
            break
        case icon6:
            currentIconTitle.innerText = "Corona"
            currentIconInfo.innerText = "One the renderer engines deployed to deliver our high-quality photorealistic, physically based shading virtual worlds."
            break
        case icon7:
            currentIconTitle.innerText = "Daz3D"
            currentIconInfo.innerText = "Our main tool for 3D character and scene creation with our own poses, character transformation and animation."
            break
        case icon8:
            currentIconTitle.innerText = "Faceware"
            currentIconInfo.innerText = "Real-time facial tracking software used to track any face motion effects and deliver our 3D character on our live streams."
            break
        case icon9:
            currentIconTitle.innerText = "Headshot"
            currentIconInfo.innerText = "Our main AI-powered Character Creator plugin from Reallusion to generate 3D realtime digital humans."
            break
        case icon10:
            currentIconTitle.innerText = "iClone"
            currentIconInfo.innerText = "Our professional tool to create 3D animations and story telling in virtual environments with visual effects for our virtual worlds."
            break
        case icon11:
            currentIconTitle.innerText = "Iray"
            currentIconInfo.innerText = "Our main rendered cross software for high-quality photorealistic, physically based shading virtual worlds."
            break
        case icon12:
            currentIconTitle.innerText = "Leica"
            currentIconInfo.innerText = "The main professional 3D camera hardware provider deployed for large 3D scanning project using very high precision laser-based photogrammetry."
            break
        case icon13:
            currentIconTitle.innerText = "Matteport"
            currentIconInfo.innerText = "Our main professional 3D camera hardware provider for large-scale 3D scanning deployment and software integration development."
            break
        case icon14:
            currentIconTitle.innerText = "3ds Max"
            currentIconInfo.innerText = "3D modeling and rendering software for 3D modeling, rendering, and animation."
            break
        case icon15:
            currentIconTitle.innerText = "Maya"
            currentIconInfo.innerText = "3D software used for 3D modeling, rendering and animation on specific use cases."
            break
        case icon16:
            currentIconTitle.innerText = "Perception Neuron"
            currentIconInfo.innerText = "Our main full body motion capture solution used for 3D live animation and VFX productions."
            break
        case icon17:
            currentIconTitle.innerText = "Pix4D"
            currentIconInfo.innerText = "Main professional photogrammetry and drone mapping software used for exterior 3D mapping."
            break
        case icon18:
            currentIconTitle.innerText = "Reallusion"
            currentIconInfo.innerText = "Suite of software used for 3D character creation and animation projects."
            break
        case icon19:
            currentIconTitle.innerText = "Revit"
            currentIconInfo.innerText = "Main BIM software to design structure, document and deliver architecture based real estate projects including buildings and landscape."
            break
        case icon20:
            currentIconTitle.innerText = "Sketchfab"
            currentIconInfo.innerText = "Main platform used for 3D and AR asset management in combination with other 3D asset content providers."
            break
        case icon21:
            currentIconTitle.innerText = "Unity"
            currentIconInfo.innerText = "Real-time platform for 3D VRAR project integration on mobile and web."
            break
        case icon22:
            currentIconTitle.innerText = "Unreal"
            currentIconInfo.innerText = "Real-time platform for 3D VRAR project integration on mobile and web."
            break
        case icon23:
            currentIconTitle.innerText = "Vectary"
            currentIconInfo.innerText = "Browser-based software used for online AR projects in combination with other tools."
            break
        case icon24:
            currentIconTitle.innerText = "3DF Zephyr"
            currentIconInfo.innerText = "Photogrammetry software used for image processing, photogrammetry analysis, editing and 3D reconstruction."
            break
    }
    }
})



/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor("#161828", 1)

/**
 * Tick
 */

 const clock = new THREE.Clock()

 const tick = () =>
 {
     const elapsedTime = clock.getElapsedTime()

     firstRing.rotation.z += 0.002
     secondRing.rotation.z += 0.002
     thirdRing.rotation.z += 0.002
     fourthRing.rotation.z += 0.002
     // Render
     renderer.render(scene, camera)
 
     // Call tick again on the next frame
     window.requestAnimationFrame(tick)
 
     // raycaster logic
     const intersects = raycaster.intersectObjects(objectsToIntersect)
     raycaster.setFromCamera(mouse, camera)

     if(intersects.length)
     {
         if(!currentIntersect)
         {
         }
 
         currentIntersect = intersects[0]
     }
     else
     {
         if(currentIntersect)
         {
         }
         currentIntersect = null
     }     
 }
 
 tick()