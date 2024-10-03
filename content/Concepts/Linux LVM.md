---
parent:
  - "[[Linux|Linux]]"
tags:
  - computing/Linux
aliases:
  - LVM
  - logical volume management
created: 2024-10-03
modified: 2024-10-03
publish: true
---
**Logical Volume Manager (LVM)** is an advanced storage management feature that offers more flexibility than [[Linux disk partitioning|traditional disk partitioning]]. A key advantage of LVM is the ability to easily resize logical volumes, which was difficult with traditional partitions.

I personally use LVM to partition my `/` and `/home` into two separate logical volumes.

## Key Concepts
There are 3 concepts that LVM manages, organized in a hierarchy:
- **Physical volumes**: lowest-level of building block
- **Volume groups**: are collections of physical volumes. This abstraction is useful if we have multiple disks and we want to combine them into a single group
- **Logical volumes**: created from volume groups, analogous to partitions

## Physical Volumes
A physical volume can either be a raw disk or a disk partition. All commands that manage physical volumes start with the letters `pv`.

### Create Physical Volumes
```shell
sudo pvcreate /dev/sda1
```

### Listing Physical Volumes
We have several different commands with varying levels of verbosity: `pvscan`, `pvs`, and `pvdisplay`

### Remove a Physical Volume
```shell
sudo pvremove /dev/sda1
```

## Volume Groups
Volume group commands start with `vg`.
### Create Volume Group
```shell
sudo vgcreate vg /dev/sda1 /dev/sda2
```

### Listing Volume Groups
`vgdisplay`, `vgscan` and `vgs`

### Add Additional Physical Volumes to a Volume Group
Syntax:
```shell
vgextend <volume_group> <physical_volume1> <physical_volume2> ....
```
Example:
```
sudo vgextend vg /dev/sda3
```
Note that if `/dev/sda3` is not a physical volume, `vgextend` will automatically make it one.

### Remove Physical Volumes from a Volume Group
```shell
sudo vgreduce vg /dev/sda1 /dev/sda2
```

### Removing a Volume Group
```shell
sudo vgremove vg
```

## Logical Volumes
All logical volume commands start with `lv`

### Create Logical Volumes
Syntax:
```shell
sudo lvcreate -L <size> -n <lvname> <vgname>
```
Example:
```shell
sudo lvcreate -L 5GB -n lv1 vg
```

We can also create a logical volumes that use all the space in the volume group with the following syntax:
```shell
sudo lvcreate -l 100%FREE -n <lvname> <vgname>
```

### Operations on Logical Volumes
After creating logical volumes, we need to give them filesystems. For example:
```shell
sudo mkfs.ext4 /dev/vg/lv1
```
We can also mount it:
```shell
sudo mount -t ext4 /dev/vg/lv1 /mnt
```

### Resizing a Logical Volume
There are `lvextend` and `lvreduce` commands to increase or decrease the size of a logical volume. And there is also a `lvresize` that can accomplish both:
```shell
sudo lvresize -L -2GB vg/lv1
```

### Removing a Logical Volume
Finally, we can remove a logical volume with `lvremove`:
```shell
sudo lvremove vg/lv1
```