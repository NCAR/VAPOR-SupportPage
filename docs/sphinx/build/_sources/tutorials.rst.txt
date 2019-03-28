=================
Tutorials
=================

.. _quickStartGuide:

QuickStart Guide
----------------

First, install the version of Vapor3 for your computer's operating system from our :ref:`downloads <downloads>` page.  Updating your graphics drivers at this point can't hurt.

If you don't have :ref:`data that's supported <data>` by Vapor3 yet, you can :ref:`download a sample <sampleData>` to get started with.

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

    Unless otherwise specified, Vapor3 will exist in C:\\Program Files\\VAPOR\\vapor.exe.  Double click on the executable.

Import or Load Data
```````````````````

There are two ways to get data into Vapor3.  Once you've loaded data, we can create your first :ref:`Renderer <Renderers>`.

To load data, do one of the following from the ``File`` menu:

1. Load a .vdc file after converting it into :ref:`VDC`
    ``File->Open VDC``

2. Import your data, if it's one of the natively supported data types (:ref:`WRF`, :ref:`NetCDF-CF`, :ref:`MPAS`)
    ``File->Import->[dataType]``

+------------------------------------------------+----+------------------------------------------------+
| Loading a .vdc file                            |    | Importing data                                 |
+------------------------------------------------+----+------------------------------------------------+
| .. image :: ../assets/images/loadData.png      | or | .. image:: ../assets/images/importData.png     |
+------------------------------------------------+----+------------------------------------------------+

Creating a Renderer
```````````````````
Now that we've loaded some data to visualize, we can create a new :ref:`Renderer <Renderers>`.

Vapor3 displays all of your renderers in a table in the upper left corner of the application.  Next to this table are controls that  let you create ``New`` renderers, ``Delete`` renderers, or ``Duplicate`` existing renderers.  

.. figure:: ../assets/images/rendererTable.png
    :scale: 35
    :align: center
    :figclass: align-center

    Vapor3's Renderer Table.

Click on ``New``.  This will raise a window that will let you choose from the currently available renderers.  Pick the Slice Renderer by either double-clicking on the ``Slice`` button.

.. figure:: ../assets/images/newRenderer.png
    :scale: 25 
    :align: center
    :figclass: align-center

    Vapor3's ``New Renderer`` Dialog

Notice that your new :ref:`Slice Renderer <Slice>` has been added to the Renderer Table.  By default, all renderers are inactive after being created.  To activate your Slice renderer, click the ``Enabled`` checkbox in the Renderer Table that's in the same row as your new Slice.

Now that you have your first Renderer, you can do the following:

1. Change the displayed variable in the :ref:`Variables Tab <VariablesTab>`
2. Change the color mapping of your variable in the :ref:`Appearance Tab <AppearanceTab>`
3. Modify the orientation and region that your renderer is drawn to in the :ref:`Geometry Tab <GeometryTab>`
4. Add annotations and color bars in the :ref:`Annotations Tab <AnnotationTab>`

|

Videos 
------

.. _introTutorial:

Vapor 3 Beta Walkthrough
````````````````````````
.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/gfj2PSd2rvE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
|

Volume Rendering
````````````````
.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/yWX4Bdulwz0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
|

Manuscripts
-----------

El-Reno F5 Tornado
``````````````````

Instructions for installing VAPOR (on Windows, Mac, or Linux) are on the VAPOR website.  For convenience we provide here the directions for installing VAPOR on a Linux system.

If VAPOR has already been installed on your system, try to execute "vaporgui" from a shell.  If the application launches OK, you can skip this step.  If VAPOR does not launch, you will need to set up the vapor environment by performing step "d." below.

To install VAPOR on a Linux system, perform the following steps:

a.    Download the appropriate vapor binary installer package from the VAPOR download page.  On a 32-bit Linux system, this is vapor-2.x.x-Linux_i386.tar.gz, where 2.x.x is the current version.  On a 64-bit Linux system, this is vapor-2.x.x-Linux_x86_64.tar.gz .

b.    Perform the following commands (with a 32-bit system) to prepare for installation:

gunzip vapor-2.x.x-Linux_i386.tar.gz
tar -xf vapor-2.x.x-Linux_i386.tar
cd vapor-2.x.x_Linux_i386
c.     Run the vapor-install.csh installation script, supplying the single argument specifying the directory where vapor is to be installed, for example:

./vapor-install.csh /usr/local/apps/vapor-2.3.0
d.    Before you run any of the VAPOR tools, or the VAPOR user interface, you must set up your shell environment for running VAPOR.  Let "vapor_home" indicate the directory where vapor is installed.

If you are using a C shell (csh, tcsh), issue the command:
source vapor_home/bin/vapor-setup.csh

Users of Bourne shells (sh, bash, ksh) should issue the command:
.  vapor_home/bin/vapor-setup.sh

So that you don't have to issue this command every time you run VAPOR in a new shell, you can place the above command in your .login script (C -shell) or .profile script (other shells).  However note that putting this command in the .login or .profile script may conflict with other environments (e.g. Python) invoked in other shells.

Hurricane Katrina
`````````````````

Instructions for installing VAPOR (on Windows, Mac, or Linux) are on the VAPOR website.  For convenience we provide here the directions for installing VAPOR on a Linux system.

If VAPOR has already been installed on your system, try to execute "vaporgui" from a shell.  If the application launches OK, you can skip this step.  If VAPOR does not launch, you will need to set up the vapor environment by performing step "d." below.

To install VAPOR on a Linux system, perform the following steps:

a.    Download the appropriate vapor binary installer package from the VAPOR download page.  On a 32-bit Linux system, this is vapor-2.x.x-Linux_i386.tar.gz, where 2.x.x is the current version.  On a 64-bit Linux system, this is vapor-2.x.x-Linux_x86_64.tar.gz .

b.    Perform the following commands (with a 32-bit system) to prepare for installation:

gunzip vapor-2.x.x-Linux_i386.tar.gz
tar -xf vapor-2.x.x-Linux_i386.tar
cd vapor-2.x.x_Linux_i386
c.     Run the vapor-install.csh installation script, supplying the single argument specifying the directory where vapor is to be installed, for example:

./vapor-install.csh /usr/local/apps/vapor-2.3.0
d.    Before you run any of the VAPOR tools, or the VAPOR user interface, you must set up your shell environment for running VAPOR.  Let "vapor_home" indicate the directory where vapor is installed.

If you are using a C shell (csh, tcsh), issue the command:
source vapor_home/bin/vapor-setup.csh

Users of Bourne shells (sh, bash, ksh) should issue the command:
.  vapor_home/bin/vapor-setup.sh

So that you don't have to issue this command every time you run VAPOR in a new shell, you can place the above command in your .login script (C -shell) or .profile script (other shells).  However note that putting this command in the .login or .profile script may conflict with other environments (e.g. Python) invoked in other shells.
