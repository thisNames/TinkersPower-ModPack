ItemEvents.modification(event =>
{
    const _this = id => "tide:" + id;

    // 龙鳍靴
    incArrmor(event, _this("dragonfin_boots"), 181, 5, 3);
});
