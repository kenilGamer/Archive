import * as THREE from 'three';
import { Pane } from 'tweakpane';
import Microphone from './Microphone.js';
console.log(Pane);

export default class Experience
{
    static instance;

    constructor(_options = {})
    {
        if (Experience.instance)
        {
            return Experience.instance;
        }
        Experience.instance = this;

        // Options
        this.targetElement = _options.targetElement;

        if (!this.targetElement)
        {
            console.warn('Missing \'targetElement\' property');
            return;
        }

        this.time = new Time();
        this.sizes = new Sizes();
        this.setConfig();
        this.setStats();
        this.setDebug();
        this.setScene();
        this.setCamera();
        this.setRenderer();
        this.setResources();
        this.setMicrophone(); // Initialize the Microphone
        this.setWorld();

        this.sizes.on('resize', this.resize.bind(this)); // Bind resize method
        this.update();
    }

    setConfig()
    {
        this.config = {
            debug: window.location.hash === '#debug',
            pixelRatio: Math.min(Math.max(window.devicePixelRatio, 1), 2),
        };

        const { width, height } = this.targetElement.getBoundingClientRect();
        this.config.width = width;
        this.config.height = height || window.innerHeight;
    }

    setStats()
    {
        if (this.config.debug)
        {
            this.stats = new Stats(true);
        }
    }

    setDebug()
    {
        if (this.config.debug)
        {
            this.debug = new Pane();
            this.debug.containerElem_.style.width = '320px';
        }
    }

    setScene()
    {
        this.scene = new THREE.Scene();
    }

    setCamera()
    {
        this.camera = new Camera();
    }

    setRenderer()
    {
        this.renderer = new Renderer({ rendererInstance: this.rendererInstance });
        this.targetElement.appendChild(this.renderer.instance.domElement);
    }

    setResources()
    {
        this.resources = new Resources(assets);
    }

    setMicrophone()
    {
        this.microphone = new Microphone(); // Initialize the Microphone
    }

    setWorld()
    {
        this.world = new World();
    }

    update()
    {
        this.stats?.update();
        this.camera.update();
        this.microphone?.update();
        this.world?.update();
        this.renderer?.update();

        window.requestAnimationFrame(this.update.bind(this)); // Bind update method
    }

    resize()
    {
        const { width, height } = this.targetElement.getBoundingClientRect();
        this.config.width = width;
        this.config.height = height;
        this.config.pixelRatio = Math.min(Math.max(window.devicePixelRatio, 1), 2);

        this.camera?.resize();
        this.renderer?.resize();
        this.world?.resize();
    }

    destroy()
    {
        // Cleanup code if necessary
    }
}
