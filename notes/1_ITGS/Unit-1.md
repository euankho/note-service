# Hardware 

## Input Devices
- **Input devices** are items of hardware that allow entry of information into the computer
- ### List of Input devices:
    - **Keyboards**
    <button id="kbtoggle"></button>
    <div id="kbcontent" class="hide">   
      - **Layouts:**
        - QWERTY (standard)
        - DVORAK (said to increase typing speed)
      - **Types:**
        - **Multimedia keyboards:**  *standard QWERTY* keyboards with *additional hotkeys* (function keys, windows key, etc)
        - **Concept keyboards:** *each key is programmed to perform a custom function.* They are useful in situations where the user needs to make a quick selection of choices from a pre-set options.
        - **Soft keyboard** (also called software keyboard, on screen keyboard, or virtual keyboard): is represented by a series of buttons drawn on a monitor or screen. The user selects options using a pointing device like a mouse, or a touch screen. Soft keyboards are useful because they are more accessible than regular keyboards (most used in smartphones)
    </div>
    - **Mouse:** the standard pointing device for most desktops. Consists of 2 buttons and a scroll wheel
    - **Touch pad (also known as track pads):** used on laptops as there is not enough space for a mouse.
        - **Multitouch touch pads** allow more complex actions to be performed such as 2 finger swiping (people normally call them *gestures*)
    - **Touch screens** allows users to interact with computers with their hand or a stylus (for more precise input). They are most found on small portable devices (smartphones) and smartphone screens has support for multi- touch which allow complex gestures with more than 1 finger
    - **Microphone:** hardware device which allows *sound data* to be input into a computer. They are most often used for video conferencing or VoIP (Voice over Internet Protocol)
    - **Game controllers** have many different configurations with variety of buttons and features. The most common input devices are joysticks and gamepads.
    - **Magnetic Stripe Readers** are used to *read magnetic strips* which are seen on bank cards, credit cards, hotel keycards, etc.
    - **Smart Cards** are a plastic credit card which has an *embedded processor* compared to a magnetic stripe in the “dumb” cards. The *processor is powered when the smart card is inserted inside a smart card reader*. The processor itself controls the data going in and out thus allowing the data inside to be encrypted.
    - **Optical Mark Recognition (OMR)** is an input method for quickly reading and marking multiple choice style answers/questions.

## Output Devices
- **LCD (Liquid Crystal Display):** A type of display output which is commonly used in laptops, TVs, monitors and mobile devices
- **OLED (Organic Light Emitting Diodes):** A type of display output which is commonly used in laptops, TVs, monitors and mobile devices
    - Difference between LCD and OLED: LEDs use independent-illuminated pixels, while LCD screens use background light to display the image. In other words, on an OLED screen, each pixel has its own “background light,” and thus it renders its light and color independently.
- **Speakers:** An output device for sound
- **Printers:** An output device which is used to create hard copies of documents and files.
|            | Inkject                 | Laser                    |
| ---------- | ----------------------- | ------------------------ |
| Advantages | Good for photo printing | higher quality printouts |
- **3D printers** converts a CAD (Computer aided design) into a physical model using additive technologies.

## Processor Technology
- **CPU (Central Processing Unit):** the heart of a computer which is responsible for performing all instructions and tasks the computer is meant to do
    - **Clock speeds:** the speed which a proccessor executes instructions. Measured in Ghz (Gigahertz)
    - Increased processor performance can also be achieved by adding additional processor cores (used for multitasking)
- **Motherboard:** it has slots to fit all other components (CPU, GPU, RAM, storage, etc) and allowing them to connect. It also has usb ports and connections which might be needed.
- **GPU (Graphics Processing Unit):** Similar to a CPU but used to perform graphical related tasks
- **RAM (Random Access Memory):** used to store working data and machine code (it is also very fast)
    - Most common ram is DDR3 and DDR4 (Direct Data Rate) the bigger the number the faster but may not be able to keep up with CPU speeds
    - DRAM (D for Dynamic) used as the main ram. SRAM (S for Static) is used for storage thus more expensive
- **ROM (Read Only Memory):**  read only memory a type of non- volatile memory used in computers and other electronic devices. Used for storing the BIOS (Basic Input/Output System) and boot up part of the OS

## Ports and connectors
- Ports and connectors as the name implies is meant to connect 2 devices together. 
- Types of connectors (this list is by no means all types of connectors):
    - **VGA** (video only)
    - **HDMI** (carries both video and audio)
    - **DisplayPort** (carries both video and audio)
- **USB (Universal Serial Bus):** A standard used for connecting peripherals including mice, keyboards, external hard drive, etc.

## Storage Devices
- **Primary Storage:** the high speed, electronic memory found inside a computer.\
    - **RAM (Random Access Memory):** a temporary (volatile) storage area for programs and data that are being used in a given moment.
    - **Read Only Memory (ROM):** a type of primary storage whose contents cannot be change
- **Secondary Storage:** used to store all of the data and programs
    - **Magnetic tapes** have been used in computing for many years. In the 1980s many home computers by companies like Amstrad and Sinclair used magnetic audio tapes to store all their software and data.
    - Magnetic **hard disks** consist of a series of disk platters spinning at up to 10,000 rpm inside a solid case. A read/write head moves back- wards and forwards over the disk and magnetically charges areas of it to store data.
    - **Optical disks** like COs, DVDs, and Blu-ray disks read and store data using lasers.
    - **SSD (Solid State Drive):** a solid-state storage device that uses integrated circuit assemblies to store data persistently, typically using flash memory, and functioning as secondary storage in the hierarchy of computer storage
    - **Flash memory** is a technology that stores data using electronic logic dates

## Bits and Bytes
- **Bits:** a single signal or gap between signals 1 or 0, off or on, yes or no. A 1 means it lets the signal through and 0 means it blocks it. 
- **Byte:** a collection of 8 bits / one byte represents a keyboard character
    - One byte and store a value between 0 and 255 (2^8 values we start at 0 so ye) 
- **Ascii:** American Standard Code for Information Interchange (standard for storing text) 
- **Unicode:** Standard for storing text 

## Failover systems
-  **Failover systems** or standby systems is designed to keep a system running if the primary system fails (either to hardware, software, or power failure). These are also called redundant system as they do the same as the primary system
- A **RAID (Redundant Array of Independent Disks) array** is a failover system for hard disks.
- A common approach is **mirroring**. This means the backup hard disk copies the main hard disk.
    - Advantages:
        - If the main hard disk fails to be read another hard disk can be used
    - Disadvantages:
        - If the main hard disk gets corrupted or a virus is installed, all hard disks have it
- **An Uninterruptible Power Supply (UPS)** provides a redundant power source in case of a mains electricity failure. 
    - On detecting a power failure, a battery in the UPS will provide enough power for a short period of time, which should be sufficient for the mains power to be restored or for an alternative power source (a generator) to be switched on.

## Types of computers
- **Super computers** are cutting edge computing devices/technology. They are a large, fast, powerful, and very expensive.
- **Mainframe** are similar to supercomputers however while supercomputers are optimized for very high speeds calculations, mainframes are optimized for high data throughput(reading/writing large amount of data).
- **Desktops** are towers which contain a computer. They are slightly cheaper than a laptop and with full control over hardware, it can be made more ergonomic.
- **Laptops** is a portable computer. They generally include a screen, keyboard, speakers, WIFI card, and a trackpad. The difficult part or bottleneck of designing a laptop is the thermals as laptops are smaller in comparison to a desktop and not much space is available.
- **Mobile devices** are like laptops but smaller and normally pocketable
- **Embedded systems** are computers which are hidden inside another device. They can be found in cars(where they control the anti-lock), digital watches, washing machines, etc

## Hardware designed for the disabled (Accessibility hardware)
- **Alternative Input Methods**
    - Some (physically disabled) people with mobility issues can input characters into a computer with a **mouse** or a **trackball** controlled by their feet paired with an **onscreen keyboard**.
    - **Sip-and-puff** system (is activated by inhales and exhales)
    - **Joysticks** (moved around by their feet, chin, hand, etc to control the cursor)
    - **Wands and sticks** - worn on the head, held in the mouth or strapped to the chin and used to presskeys on the
keyboard
    - **Electronic pointing devices** used to control the cursor (this could include a eye pointer, nerve signal, etc)
    - **Touch screens** (does not require a keyboard or mouse which may be easier to use for some disable people)
- Other input methods for the disabled may include **adapted keyboards** specifically for the user (similar to a ergo keyboard). For example *larger/smaller keys*, made for *one handed use*, or a *completely different key layout*.
- The blind may not be able to see the screen nor type on a standard keyboard yet there are keyboards which use *braille keycaps.*





















