# 创建 Entity 文件

对于一个 Entity 涉及到的点主要有 3 个，Entity 类、EntityRenderer 渲染器类，EntityModel 模型类

### Entity 类

这是一个 Entity 的最小实现。继承 Entity，让这个类变成一个实体类。实现其中必要的方法。**重要的点是，addEntityPacket 要返回 return NetworkHooks.getEntitySpawningPacket(this);**，NetworkHooks 是 Forge 提供的方法，这样创建实体**因为实体包是在服务端创建的，要主动发送给客户端，原版提供的方法没有发包，所以会导致客户端存在问题**

```java
public class DoomMushroomEntity extends Entity {
    public DoomMushroomEntity(EntityType<?> pEntityType, Level pLevel) {
        super(pEntityType, pLevel);
    }

    public DoomMushroomEntity(Level pLevel, BlockPos pos, @Nullable LivingEntity pOwner) {
        this(ModEntities.DOOM_MUSHROOM_ENTITY.get(), pLevel);
        this.setPos(pos.getX(), pos.getY(), pos.getZ());
        this.xo = pos.getX();
        this.yo = pos.getY();
        this.zo = pos.getZ();
    }

    // @Override
    // public void tick() {
    //     super.tick();
    // }

    @Override
    protected void defineSynchedData() {
    }

    @Override
    protected void readAdditionalSaveData(CompoundTag pCompound) {
    }

    @Override
    protected void addAdditionalSaveData(CompoundTag pCompound) {
    }

    @Override
    public Packet<?> getAddEntityPacket() {
        return NetworkHooks.getEntitySpawningPacket(this);
    }
}
```

实体在注册后，通过
`public static final DeferredRegister<EntityType<?>> ENTITIES = DeferredRegister.create(ForgeRegistries.ENTITIES, CircleMod.MOD_ID);`，

`public static final RegistryObject<EntityType<DoomMushroomEntity>> DOOM_MUSHROOM_ENTITY = ENTITIES.register("doom_mushroom", () -> EntityType.Builder.<DoomMushroomEntity>of(DoomMushroomEntity::new, MobCategory.MISC).sized(1f, 2f).build("doom_mushroom"));
`

然后把 Entity 注册到 IEventBus 中即可。

## EntityRenderer 渲染器类

下面 前 3 个注释的地方是关键。第一和第二个注释，这里是将模型类实例化的地方，在渲染器渲染的时候需要调用模型实例中的 renderToBuffer 方法，这样才会把模型创建出来。

```java
public class DoomMushroomEntityRenderer extends EntityRenderer<DoomMushroomEntity> {
    private EntityModel<DoomMushroomEntity> doomMushroomModel;//新增一个成员

    public DoomMushroomEntityRenderer(EntityRendererProvider.Context pContext) {
        super(pContext);
        // 新增下面的代码
        doomMushroomModel = new DoomMushroomModel(pContext.bakeLayer(DoomMushroomModel.LAYER_LOCATION));
    }

    @Override
    public void render(DoomMushroomEntity pEntity, float pEntityYaw, float pPartialTick, PoseStack pPoseStack, MultiBufferSource pBuffer, int pPackedLight) {
        super.render(pEntity, pEntityYaw, pPartialTick, pPoseStack, pBuffer, pPackedLight);
        // 调用下面
        this.doomMushroomModel.renderToBuffer(pPoseStack, pBuffer.getBuffer(RenderType.entityCutout(getTextureLocation(pEntity))), pPackedLight, OverlayTexture.NO_OVERLAY, 1.0F, 1.0F, 1.0F, 1.0F);
    }

    @Override
    public ResourceLocation getTextureLocation(DoomMushroomEntity pEntity) {
        // 贴图位置
        return new ResourceLocation(CircleMod.MOD_ID, "textures/entity/doom_mushroom.png");
    }
}

```

## EntityModel 类

**这个类就是一个模型，这里是用 Blockbench 创建“模组版模型”，导出 java 模型而产生的 java 文件，有部分内容需要修改，例如 ResourceLocation**

```java
// Made with Blockbench 4.9.4
// Exported for Minecraft version 1.17 or later with Mojang mappings
// Paste this class into your mod and generate all required imports

public class DoomMushroomModel extends EntityModel<DoomMushroomEntity> {
    public static final ModelLayerLocation LAYER_LOCATION = new ModelLayerLocation(new ResourceLocation(CircleMod.MOD_ID, "doom_mushroom"), "main");

    private final ModelPart bb_main;

    public DoomMushroomModel(ModelPart root) {
        this.bb_main = root.getChild("bb_main");
    }

    public static LayerDefinition createBodyLayer() {
        MeshDefinition meshdefinition = new MeshDefinition();
        PartDefinition partdefinition = meshdefinition.getRoot();
        PartDefinition bb_main = partdefinition.addOrReplaceChild("bb_main", CubeListBuilder.create().texOffs(0, 0).addBox(-1.0F, -2.0F, -11.0F, 2.0F, 2.0F, 22.0F, new CubeDeformation(0.0F)), PartPose.offset(0.0F, 24.0F, 0.0F));
        PartDefinition cube_r1 = bb_main.addOrReplaceChild("cube_r1", CubeListBuilder.create().texOffs(0, 0).addBox(-1.0F, -2.0F, -11.0F, 2.0F, 2.0F, 22.0F, new CubeDeformation(0.0F)), PartPose.offsetAndRotation(0.0F, 0.0F, 0.0F, 0.0F, 1.5708F, 0.0F));
        return LayerDefinition.create(meshdefinition, 64, 64);
    }

    @Override
    public void setupAnim(DoomMushroomEntity entity, float limbSwing, float limbSwingAmount, float ageInTicks, float netHeadYaw, float headPitch) {
    }

    @Override
    public void renderToBuffer(PoseStack poseStack, VertexConsumer vertexConsumer, int packedLight, int packedOverlay, float red, float green, float blue, float alpha) {
        bb_main.render(poseStack, vertexConsumer, packedLight, packedOverlay, red, green, blue, alpha);
    }
}
```

# 监听事件，注册模型信息

在模型文件等都创建好之后，要把模型注册到模组中，这里需要监听下面两个事件。（这个文件是默认监听客户端和服务端事件的）。

第一个是为了注册实体渲染器，这样游戏中能通过渲染器渲染这个实体。

第二个是为了注册模型的贴图信息，这样游戏能够获取到模型的贴图内容。

```java
@Mod.EventBusSubscriber(modid = CircleMod.MOD_ID, bus = Mod.EventBusSubscriber.Bus.MOD)
public class ModEventBusEvents {
    @SubscribeEvent
    public static void registerEntityRenderers(EntityRenderersEvent.RegisterRenderers event) {
        event.<DoomMushroomEntity>registerEntityRenderer(ModEntities.DOOM_MUSHROOM_ENTITY.get(), DoomMushroomEntityRenderer::new);
    }

    @SubscribeEvent
    public static void registerEntityRenderers(EntityRenderersEvent.RegisterLayerDefinitions event) {
        event.<DoomMushroomEntity>registerLayerDefinition(DoomMushroomModel.LAYER_LOCATION, DoomMushroomModel::createBodyLayer);
    }
}
```
