---
layout: default
title: Code Distributions
menu: [main]
---

The DART code is distributed via a Subversion (SVN) repository. Anonymous access is allowed, and the repository code is read-only for everyone except the DART development team. DART is distributed as source code, so you must be prepared to build the parts of the system you need before you can run it.


DART continues to evolve. Using subversion makes it easy to update and compare your checked-out version of the code with the latest repository version of the code. If you are not familiar with the svn command (the client application of subversion), you should take a stroll through Tim's svn primer. Or there are several GUI programs that help you manage, check out, and merge subversion distributions. If you cannot use svn (e.g. because you are behind a firewall that does not permit subversion access), please email the DART team and we may be able to send you a tar file as a last resort.


The DART development team keeps released versions of the code which are stable (don't change) except for bug fixes. Generally we recommend users check out one of these versions. The DART development team makes frequent updates to the trunk version of the code as new features are developed. Those users who want to use recently added features are welcome to check out the trunk, but they should be prepared to work around possible non-backwards compatible changes and more lightly tested code than the released versions.


We request that you register for DART and afterwards you will be redirected to instructions on how to download a version of the DART code. Registration helps us track how many people are using our code, and allows us to contact current users in case of bugs or major updates. The DART mailing list is a very low-traffic list -- perhaps 4 emails per year -- so PLEASE use a real email address when signing up. We solemnly swear to protect your email address like it is our own! Even local NCAR users or users who have registered in the past are encouraged to re-register when downloading new versions. Thank you for your understanding.

| Version       | Date         | Instructions  | Most Notable Change(s)  |
| ------------- |:------------:|:-------------:| -----------------------:|
| Manhattan     | 15 Mar 2017  | [doc]         | 	Native netCDF support, less filesystem I/O, better scaling, better computational performance, supportes huge memory models. Simplified organizational layout. Supports ROMS, CICE, WRF-CHEM ...
| lanai         | 13 Dec 2013  | [doc]         | Support for the CESM climate components under the CESM framework; the MPAS models, the NOAH land model, the GITM ionosphere model, the NOGAPS atmosphere model, the NAAPS aerosol model, and the SQG surface quasi-geostrophic model. Support for many new chemistry and aerosol observation types, support for many new observations sources, many new diagnostic routines, and new utilities.
| trunk         | today        | included in distribution | varies, use svn log --revision ####:HEAD to see log messages about changes since revision ####.
| kodiak        | 30 Jun 2011  | [doc]         | Damped Inflation, Sampling Error Correction, Boxcar Kernel Filter option, support for new models, new observation types, new diagnostics, new utilities.

