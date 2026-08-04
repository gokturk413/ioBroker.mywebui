'use strict';
// Applies a Rust handler's Effect[] against the ioBroker adapter-core. Thin —
// each effect maps to exactly one adapter call. `reply` is terminal: its payload
// is returned to the sendTo caller. Effects run in order.
async function applyEffects(adapter, effects) {
    let reply;
    for (const e of (effects || [])) {
        switch (e.kind) {
            case 'writeFile': await adapter.writeFileAsync(e.namespace, e.path, Buffer.from(e.data_b64, 'base64')); break;
            case 'unlink': await adapter.unlinkAsync(e.namespace, e.path); break;
            case 'setState': await adapter.setStateAsync(e.id, JSON.parse(e.value_json), e.ack); break;
            case 'setForeignState': await adapter.setForeignStateAsync(e.id, JSON.parse(e.value_json), e.ack); break;
            case 'setObjectNotExists': await adapter.setObjectNotExistsAsync(e.id, JSON.parse(e.obj_json)); break;
            case 'log': (adapter.log[e.level] || adapter.log.info)(e.message); break;
            case 'subscribeStates': await adapter.subscribeStatesAsync(e.pattern); break;
            case 'reply': reply = JSON.parse(e.payload_json); break;
            default: adapter.log.warn('unknown effect kind: ' + e.kind);
        }
    }
    return reply;
}
module.exports = { applyEffects };
