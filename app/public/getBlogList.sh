#!/bin/bash

list () {
    for file in `ls -a $1`
    do
        if [ -d $1'/'$file ]
        then
            if [[ $file != '.' && $file != '..' ]]
            then
                list $1'/'$file
            fi
        else
            echo $file
        fi
    done
}
list /Users/hesen/Desktop/blog
