---
layout: default
title: "About Us"
menu: [main]
---

# About Us
DART is a community facility for ensemble DA developed and maintained by the Data Assimilation Research Section (DAReS) at the National Center for Atmospheric Research (NCAR). DART provides modelers, observational scientists, and geophysicists with powerful, flexible DA tools that are easy to implement and use and can be customized to support efficient operational DA applications. DART is a software environment that makes it easy to explore a variety of data assimiliation methods and observations with different numerical models and is designed to facilitate the combination of assimilation algorithms, models, and real (as well as synthetic) observations to allow increased understanding of all three. DART includes extensive documentation, a comprehensive tutorial, and a variety of models and observation sets that can be used to introduce new users or graduate students to ensemble DA. DART also provides a framework for developing, testing, and distributing advances in ensemble DA to a broad community of users by removing the implementation-specific peculiarities of one-off DA systems.

![Alt text goes here](/assets/images/AssimAnim.gif){:class="img-responsive "}

6 frame animation demonstrating the assimilation schematic
DART employs a modular programming approach to apply an Ensemble Kalman Filter which nudges the underlying models toward a state that is more consistent with information from a set of observations. Models may be swapped in and out, as can different algorithms in the Ensemble Kalman Filter. The method requires running multiple instances of a model to generate an ensemble of states. A forward operator appropriate for the type of observation being assimilated is applied to each of the states to generate the model's estimate of the observation.

The DART algorithms are designed so that incorporating new models and new observation types requires minimal coding of a small set of interface routines, and does not require modification of the existing model code. Several comprehensive atmosphere and ocean general circulation models (GCMs) have been added to DART by modelers from outside of NCAR, in some cases with less than one person-month of development effort. Forward operators for new observation types can be created in a fashion that is nearly independent of the forecast model, many of the standard operators are available 'out of the box' and will work with no additional coding. DART has been through the crucible of many compilers and platforms. It is ready for friendly use and has been used in several field programs requiring real-time forecasting. The DART programs have been compiled with many Fortran 90 compilers and have run on linux compute-servers, linux clusters, OSX laptops/desktops, SGI Altix clusters, IBM supercomputers based on both Power and Intel CPUs, and Cray supercomputers.

