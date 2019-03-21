.. _usage:

=================
Usage
=================

Vapor3 is comprised of a set of tools called Renderers.  Each Renderer depicts your data in different ways based on your specifications, which you specify through Vapor's user interface.

We recommend that all users either watch our :ref:`Introductory Tutorial <introTutorial>` or work through :ref:`The QuickStart Guide <quickStartGuide>` which will show you how to install Vapor3, load some data, and create your first renderer.  The next step is to then learn about the Variables, Appearance, Geometry, and Annotation tabs, which are used to specify Renderer behavior.  From here, we document each renderer individually, noting their behavior and unique attributes that they may exhibit.  

We then cover some computational and diagnostic tools included in Vapor3.  Finally, we talk about Vapor3's supported data formats, and the VDC data format which can greatly reduce Renderer computation time and enable easier data exploration. 

|

.. _quickStartGuide:

QuickStart Guide
----------------

First, install the version of Vapor3 for your computer's operating system from our :ref:`downloads <downloads>` page.  Updating your graphics drivers at this point can't hurt.

If you don't have :ref:`data that's supported <dataIngestion>` by Vapor3 yet, you can :ref:`download a sample <sampleData>` to get started with.

Start Vapor3
````````````

After following the :ref:`installation instructions <installationInstructions>` for Vapor3, open it by doing the following:

:Linux:

    From a BASH shell, navigate to the directory you installed Vapor3 into.  Then issue the following command:

    ::
    
        user@localhost:~/$ sh VAPOR3-3.0.0.beta-RH7.sh


:OSX:

    Vapor3 will be located within your Applications folder.  Double click on Vapor3's icon.

:Windows:

    Unless otherwise specified, Vapor3 will exist in C:\Program Files\VAPOR\vapor.exe.  Double click on the executable.

Import or Load Data
```````````````````
There are two ways to get data into Vapor3:

1. Load your data after converting it into :ref:`VDC`
2. Import your data, if it's one of the natively supported data types (:ref:`WRF`, :ref:`NetCDF-CF`, :ref:`MPAS`)

|

.. _dataIngestion:

Data Ingestion
--------------

.. _VDC:

Vapor Data Collection (VDC)
```````````````````````````

.. _WRF:

WRF
```

.. _NetCDF-CF:

NetCDF-CF
`````````

.. _MPAS:

MPAS
````

|

User Interface Basics
---------------------

Variables Tab
`````````````
    - foo
    - bar

Appearance Tab
``````````````
    - foo
    - bar

Geometry Tab
````````````
    - foo
    - bar

Annotation Tab
``````````````
    - foo
    - bar

|

Renderers
---------

Volume Renderer
```````````````

Isosurfaces
```````````

Flow Integration
````````````````

Slices
``````

Contours
````````

Barbs
`````

Two Dimensional Variables
`````````````````````````

Georefernced Images 
```````````````````

Wireframes
``````````

|

Ancillary Tools
---------------

Animation
`````````

Python Engine
`````````````

2D Plots
````````

Statistics
``````````
