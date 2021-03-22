<template>
    <b-row>
        <b-col>
            <h3>Chambers</h3>
            <b-card v-for="(chamber,index) in chambers" v-bind:key="index">
                <h3>{{chamber.name}}</h3>
            </b-card>
        </b-col>
    </b-row>
</template>


<script>
import { Chambers } from '../../backend/collections'
export default {
    name: "chambers",
    data() {
        return {}
    },
    meteor: {
        $subscribe: {
            "chambers.all": [],
        },
        chambers(){
            return Chambers.find({}).fetch()
        }
    }
}
</script>