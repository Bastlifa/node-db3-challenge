const db = require('../data/db-config')

module.exports = 
{
    find,
    findById,
    findSteps,
    add,
    remove
}

function find()
{
    return db('schemes')
        .then(schemes =>
            {
                return schemes
            })
}

function findById(id)
{
    return db('schemes')
        .where({id})
        .first()
            .then(scheme => scheme)
}

function findSteps(id)
{
    
    return db('steps as s')
        .join('schemes as sch', 's.scheme_id', '=', 'sch.id')
        .where({scheme_id: id})
        .select('s.id', 'sch.scheme_name', 's.step_number', 's.instructions')
        .orderBy('step_number')
            .then(steps => steps)
}

function add(scheme)
{
    return db('schemes')
        .insert(scheme)
            .then(newSchemeId => 
                {
                    return findById(newSchemeId[0])
                })
}

function remove(id)
{
    let retScheme = findById(id)
    return db('schemes')
        .where({id})
        .del()
        .then(response =>
            {
                return retScheme
            })

}